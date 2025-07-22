import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import { rules as slingshotBaseRules } from './rules/slingshot/base.js';
import { rules as airbnbBestPracticesRules } from './rules/airbnb/best-practices.js';
import { rules as airbnbErrorsRules } from './rules/airbnb/errors.js';

// Base flat config for JavaScript/TypeScript projects
const base = [
    // Start with ESLint's recommended rules
    js.configs.recommended,

    // Base JavaScript configuration
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            }
        },

        plugins: {
            'import': importPlugin,
        },

        rules: {
            // Merge base rules from different sources
            ...airbnbBestPracticesRules,
            ...airbnbErrorsRules,
            ...slingshotBaseRules,
        },

        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.json'],
                },
            },
        },
    }
];

export default base;
