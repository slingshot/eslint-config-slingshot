import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

import { rules as tsBaseRules, settings as tsSettings, overrides } from './rules/ts/lib/shared.js';

// Main configuration with TypeScript support
const config = [
    {
        name: 'ssh_typescript_config',
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: {
            'import': importPlugin,
            '@typescript-eslint': typescriptEslint,
        },
        rules: {
            ...tsBaseRules,
        },
        settings: {
            ...tsSettings,
            'import/resolver': {
                node: {
                    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
                },
            },
        }
    },
    ...overrides,
];

export default config;
