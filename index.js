import base from './base.js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { rules as tsBaseRules, settings as tsSettings } from './rules/ts/lib/shared.js';
import { rules as tsReactRules, settings as tsReactSettings } from './rules/ts/react.js';
import { rules as slingshotReactRules } from './rules/slingshot/react.js';

// Main configuration with React and TypeScript support
const config = [
    // Extend base configuration
    ...base,

    // React configuration
    {
        files: ['**/*.{js,jsx,mjs,cjs}'],
        languageOptions: {
            ecmaFeatures: {
                jsx: true
            }
        },
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            '@stylistic': stylisticPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            ...slingshotReactRules,
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },

    // TypeScript configuration
    {
        files: ['**/*.{ts,tsx,cts,mts}'],
        languageOptions: {
            parser: tsParser,
            ecmaFeatures: {
                jsx: true
            }
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            '@stylistic': stylisticPlugin,
        },
        rules: {
            // TypeScript rules
            ...tsBaseRules,
            ...tsReactRules,
            ...slingshotReactRules,

            // React rules for TypeScript files
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
        },
        settings: {
            ...tsSettings,
            ...tsReactSettings,
            react: {
                version: 'detect'
            }
        }
    }
];

export default config;
