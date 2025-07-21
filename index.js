import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import slingshotReactRules from "./rules/slingshot/react.js";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
    // Global ignores
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/*.d.ts",
            "**/coverage/**",
        ],
    },

    // Base JavaScript/TypeScript configuration
    js.configs.recommended,

    // TypeScript-specific configuration
    {
        files: ["**/*.{ts,tsx,mts,cts}"],
        extends: [...tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                project: true,
                tsconfigRootDir: process.cwd(),
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2024,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        settings: {
            "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
            "import/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
        rules: {
            // Modern TypeScript rules
            "@typescript-eslint/no-unused-vars": ["warn", { 
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_" 
            }],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: false,
                },
            ],
            "@typescript-eslint/no-import-type-side-effects": "error",
        },
    },

    // React-specific configuration
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
            import: importPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
            "import/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
        rules: {
            // React rules
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,

            // Modern React patterns
            "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
            "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
            "react/require-default-props": "off", // TypeScript handles this
            "react/prop-types": "off", // TypeScript handles this
            "react/jsx-props-no-spreading": ["warn", { 
                html: "enforce",
                custom: "enforce",
                exceptions: ["Component"] 
            }],

            // Import rules
            "import/prefer-default-export": "off",
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    js: "never",
                    jsx: "never",
                    ts: "never",
                    tsx: "never",
                },
            ],

            // Slingshot-specific overrides
            ...slingshotReactRules.rules,
        },
    },

    // JavaScript-only files
    {
        files: ["**/*.{js,mjs,cjs}"],
        extends: [tseslint.configs.disableTypeChecked],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2024,
            },
        },
    },
]);
