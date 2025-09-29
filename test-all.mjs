#!/usr/bin/env node

import { spawn } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEST_PROJECTS = [
  {
    name: 'Legacy ESLint 8',
    path: 'test-projects/legacy-eslint8',
    description: 'Tests ESLint 8 compatibility with .eslintrc.js',
  },
  {
    name: 'React ESLint 9',
    path: 'test-projects/react-eslint9',
    description: 'Tests ESLint 9 flat config with React support',
  },
  {
    name: 'JavaScript ESLint 9',
    path: 'test-projects/js-eslint9',
    description: 'Tests ESLint 9 flat config with base JavaScript/TypeScript',
  },
];

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command} ${args.join(' ')}`);
    console.log(`Directory: ${cwd}`);
    console.log('─'.repeat(50));

    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: true,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function installDependencies(projectPath) {
  console.log('Installing dependencies...');
  try {
    await runCommand('pnpm', ['install'], projectPath);
    console.log('✓ Dependencies installed successfully\n');
  } catch (error) {
    console.error('✗ Failed to install dependencies:', error.message);
    throw error;
  }
}

async function runLint(projectPath) {
  console.log('Running ESLint...');
  try {
    await runCommand('pnpm', ['run', 'lint'], projectPath);
    console.log('✓ ESLint passed successfully\n');
    return true;
  } catch (error) {
    console.error('✗ ESLint failed:', error.message);
    return false;
  }
}

async function testProject(project) {
  const projectPath = join(__dirname, project.path);

  if (!existsSync(projectPath)) {
    throw new Error(`Project path does not exist: ${projectPath}`);
  }

  console.log('='.repeat(60));
  console.log(`Testing: ${project.name}`);
  console.log(`Description: ${project.description}`);
  console.log(`Path: ${project.path}`);
  console.log('='.repeat(60));

  try {
    await installDependencies(projectPath);
    const lintResult = await runLint(projectPath);
    return { ...project, success: lintResult };
  } catch (error) {
    console.error(`\n✗ Project ${project.name} failed:`, error.message);
    return { ...project, success: false, error: error.message };
  }
}

async function main() {
  console.log('Starting ESLint Configuration Tests');
  console.log(`Testing ${TEST_PROJECTS.length} projects...\n`);

  const results = [];

  for (const project of TEST_PROJECTS) {
    try {
      const result = await testProject(project);
      results.push(result);
    } catch (error) {
      results.push({
        ...project,
        success: false,
        error: error.message,
      });
    }
  }

  // Summary
  console.log('='.repeat(60));
  console.log('TEST SUMMARY');
  console.log('='.repeat(60));

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`Total projects tested: ${results.length}`);
  console.log(`Successful: ${successful.length}`);
  console.log(`Failed: ${failed.length}\n`);

  if (successful.length > 0) {
    console.log('✓ SUCCESSFUL PROJECTS:');
    successful.forEach(project => {
      console.log(`  • ${project.name}`);
    });
    console.log();
  }

  if (failed.length > 0) {
    console.log('✗ FAILED PROJECTS:');
    failed.forEach(project => {
      console.log(`  • ${project.name}: ${project.error || 'ESLint errors'}`);
    });
    console.log();
  }

  const exitCode = failed.length > 0 ? 1 : 0;

  if (exitCode === 0) {
    console.log('🎉 All tests passed! Your ESLint configuration is working correctly.');
  } else {
    console.log('❌ Some tests failed. Check the output above for details.');
  }

  process.exit(exitCode);
}

// Handle uncaught errors
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

main().catch((error) => {
  console.error('Main process failed:', error);
  process.exit(1);
});