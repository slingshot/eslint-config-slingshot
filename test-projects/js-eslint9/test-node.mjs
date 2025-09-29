#!/usr/bin/env node

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
};

function getMimeType(filePath) {
    const ext = extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'text/plain';
}

function serveStaticFile(filePath, response) {
    try {
        if (!existsSync(filePath)) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('File not found');
            return;
        }

        const content = readFileSync(filePath);
        const mimeType = getMimeType(filePath);

        response.writeHead(200, {
            'Content-Type': mimeType,
            'Cache-Control': 'public, max-age=3600',
        });
        response.end(content);
    } catch (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`Server Error: ${error.message}`);
    }
}

function handleApiRequest(request, response, pathname) {
    const { method } = request;

    if (pathname === '/api/health') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        }));
        return;
    }

    if (pathname === '/api/echo' && method === 'POST') {
        let body = '';

        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        request.on('end', () => {
            try {
                const data = JSON.parse(body);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({
                    echo: data,
                    receivedAt: new Date().toISOString(),
                }));
            } catch (error) {
                response.writeHead(400, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({
                    error: 'Invalid JSON',
                    message: error.message,
                }));
            }
        });
        return;
    }

    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({
        error: 'API endpoint not found',
        path: pathname,
        method,
    }));
}

const server = createServer((request, response) => {
    const { url = '/', method } = request;
    const pathname = new URL(url, `http://${request.headers.host}`).pathname;

    console.log(`${method} ${pathname}`);

    // Handle CORS
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (method === 'OPTIONS') {
        response.writeHead(200);
        response.end();
        return;
    }

    // API routes
    if (pathname.startsWith('/api/')) {
        handleApiRequest(request, response, pathname);
        return;
    }

    // Static file serving
    let filePath = join(__dirname, 'public', pathname === '/' ? 'index.html' : pathname);

    // Security: prevent directory traversal
    if (!filePath.startsWith(join(__dirname, 'public'))) {
        response.writeHead(403, { 'Content-Type': 'text/plain' });
        response.end('Forbidden');
        return;
    }

    serveStaticFile(filePath, response);
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log('Available endpoints:');
    console.log('  GET  /api/health - Health check');
    console.log('  POST /api/echo - Echo JSON data');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

export { server, getMimeType, handleApiRequest };
