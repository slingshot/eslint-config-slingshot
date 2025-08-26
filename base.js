import globals from 'globals';
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
