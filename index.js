import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import slingshotBaseRules from "./rules/slingshot/base.js";
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

    // TypeScript configuration
    {
        files: ["**/*.{ts,tsx,mts,cts}"],
        extends: [...tseslint.configs.recommended],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020, // Keep original ecmaVersion
                sourceType: "module",
                project: true,
                tsconfigRootDir: process.cwd(),
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.commonjs,
                ...globals.es6,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            import: importPlugin,
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
            // Apply Slingshot base rules
            ...slingshotBaseRules.rules,
        },
    },

    // React configuration
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
            // React recommended rules
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,

            // Apply Slingshot React rules
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
                ...globals.commonjs,
                ...globals.es6,
            },
        },
        plugins: {
            import: importPlugin,
        },
    },
]);
