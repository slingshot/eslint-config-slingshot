import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

import { rules as slingshotReactRules } from './rules/slingshot/react.js';

const config = [
    // React Hooks
    {
        name: 'ssh_react_hooks_config',
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            'import': importPlugin,
            'react-hooks': reactHooksPlugin,
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
        }
    },
    
    // React + JSX
    {
        name: 'ssh_react_jsx_config',
        files: ['**/*.{jsx,tsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: {
            'import': importPlugin,
            'react': reactPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            ...slingshotReactRules,
            'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
                },
            },
        }
    }
];

export default config;