import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin';

import { rules as slingshotBaseRules } from './rules/slingshot/base.js';
import { rules as airbnbBestPracticesRules } from './rules/airbnb/best-practices.js';
import { rules as airbnbErrorsRules } from './rules/airbnb/errors.js';
import { rules as airbnbStyleRules } from './rules/airbnb/style.js';
import { rules as airbnbVariablesRules } from './rules/airbnb/variables.js';
import { rules as airbnbImportsRules } from './rules/airbnb/imports.js';

// Base flat config for JavaScript/TypeScript projects
const base = [
    // Start with ESLint's recommended rules
    js.configs.recommended,

    // Base JavaScript configuration
    {
        name: 'ssh_base_config',
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },

        plugins: {
            'import': importPlugin,
            '@stylistic': stylisticPlugin,
        },

        rules: {
            // Merge base rules from different sources
            ...airbnbBestPracticesRules,
            ...airbnbErrorsRules,
            ...airbnbStyleRules,
            ...airbnbVariablesRules,
            ...airbnbImportsRules,
            
            ...slingshotBaseRules,

            'import/extensions': ['error', 'ignorePackages', {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            }],
        },

        settings: {
            'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx']
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
    }
];

export default base;
