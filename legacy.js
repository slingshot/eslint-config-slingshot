/**
 * Legacy compatibility configuration for @ssh/eslint-config
 * 
 * This config provides similar behavior to v1.x but uses modern dependencies.
 * It's recommended to migrate to the new flat config (index.js) when possible.
 * 
 * Usage in eslint.config.js:
 * import legacyConfig from '@ssh/eslint-config/legacy';
 * export default legacyConfig;
 */

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
    // Global ignores (similar to old .eslintignore behavior)
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/*.d.ts",
        ],
    },

    // Base configuration
    js.configs.recommended,

    // All files - basic setup
    {
        languageOptions: {
            ecmaVersion: 2020, // Keep older ecmaVersion for compatibility
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.commonjs,
                ...globals.es6,
            },
        },
        plugins: {
            import: importPlugin,
        },
        settings: {
            "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"]
                }
            }
        },
        rules: {
            // Legacy import rules
            "import/prefer-default-export": "off",
            "max-len": "off",
            "no-console": "off",
        },
    },

    // TypeScript files
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        settings: {
            "import/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx"]
            },
        },
        rules: {
            // Legacy TypeScript rules (similar to v5 behavior)
            "indent": "off",
            "@typescript-eslint/indent": ["error", 4],
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/consistent-type-imports": "error",
            "linebreak-style": "off",
            "function-paren-newline": "warn",
        },
    },

    // React files
    {
        files: ["**/*.{jsx,tsx}"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // Legacy React rules
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
            "react/display-name": "off",
            "react/require-default-props": "off",
            "react/no-unescaped-entities": "off",
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "react/prop-types": "off",
            "react/jsx-no-bind": "warn",
            "react/function-component-definition": "off",
            "react/jsx-no-useless-fragment": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/jsx-key": "error",
            "jsx-a11y/anchor-is-valid": "off",
            
            // React Hooks
            ...reactHooksPlugin.configs.recommended.rules,
        },
    },
]); 