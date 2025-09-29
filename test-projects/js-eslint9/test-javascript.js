import { promises as fs } from 'fs';
import path from 'path';

class DataProcessor {
    constructor(options = {}) {
        this.options = {
            batchSize: 100,
            timeout: 5000,
            ...options,
        };
        this.cache = new Map();
        this.processing = false;
    }

    async processFile(filePath) {
        if (!filePath) {
            throw new Error('File path is required');
        }

        try {
            const data = await fs.readFile(filePath, 'utf8');
            return this.processData(JSON.parse(data));
        } catch (error) {
            console.error(`Error processing file ${filePath}:`, error.message);
            throw error;
        }
    }

    async processData(data) {
        if (!Array.isArray(data)) {
            throw new Error('Data must be an array');
        }

        const results = [];
        const batches = this.createBatches(data, this.options.batchSize);

        for (const batch of batches) {
            const batchResults = await this.processBatch(batch);
            results.push(...batchResults);
        }

        return results;
    }

    createBatches(array, size) {
        const batches = [];
        for (let i = 0; i < array.length; i += size) {
            batches.push(array.slice(i, i + size));
        }
        return batches;
    }

    async processBatch(batch) {
        return Promise.all(batch.map(async (item) => {
            const cacheKey = this.generateCacheKey(item);

            if (this.cache.has(cacheKey)) {
                return this.cache.get(cacheKey);
            }

            const processed = await this.processItem(item);
            this.cache.set(cacheKey, processed);

            return processed;
        }));
    }

    async processItem(item) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ...item,
                    processed: true,
                    processedAt: new Date().toISOString(),
                    id: item.id || Math.random().toString(36).substr(2, 9),
                });
            }, Math.random() * 100);
        });
    }

    generateCacheKey(item) {
        return JSON.stringify(item);
    }

    clearCache() {
        this.cache.clear();
    }

    getCacheStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys()).slice(0, 10), // First 10 keys for debugging
        };
    }
}

export { DataProcessor };

export async function validateConfig(config) {
    const requiredFields = ['name', 'version'];

    const missing = requiredFields.filter((field) => !config[field]);

    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    if (typeof config.version !== 'string') {
        throw new Error('Version must be a string');
    }

    if (!/^\d+\.\d+\.\d+/.test(config.version)) {
        throw new Error('Version must follow semver format');
    }

    return true;
}

export function createLogger(level = 'info') {
    const levels = {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3,
    };

    const currentLevel = levels[level] || levels.info;

    return {
        error: (...args) => {
            if (currentLevel >= levels.error) {
                console.error('[ERROR]', ...args);
            }
        },
        warn: (...args) => {
            if (currentLevel >= levels.warn) {
                console.warn('[WARN]', ...args);
            }
        },
        info: (...args) => {
            if (currentLevel >= levels.info) {
                console.info('[INFO]', ...args);
            }
        },
        debug: (...args) => {
            if (currentLevel >= levels.debug) {
                console.log('[DEBUG]', ...args);
            }
        },
    };
}

export default DataProcessor;
