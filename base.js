import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin';

import { rules as slingshotBaseRules } from './rules/slingshot/base.js';
import { rules as airbnbBestPracticesRules } from './rules/airbnb/best-practices.js';
import { rules as airbnbErrorsRules } from './rules/airbnb/errors.js';
import { rules as airbnbES6Rules } from './rules/airbnb/es6.js';
import { rules as airbnbNodeRules } from './rules/airbnb/node.js';
import { rules as airbnbStrictRules } from './rules/airbnb/strict.js';
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
            ...airbnbES6Rules,
            ...airbnbNodeRules,
            ...airbnbStrictRules,
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
