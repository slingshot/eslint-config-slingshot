import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import slingshotBaseRules from "./rules/slingshot/base.js";

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

    // Base JavaScript configuration
    js.configs.recommended,

    // TypeScript configuration
    {
        files: ["**/*.{ts,mts,cts}"],
        extends: [...tseslint.configs.recommended],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
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
            "import/extensions": [".js", ".ts"],
            "import/parsers": {
                "@typescript-eslint/parser": [".ts"],
            },
            "import/resolver": {
                node: {
                    extensions: [".js", ".ts"],
                },
            },
        },
        rules: {
            // Apply Slingshot base rules
            ...slingshotBaseRules.rules,
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
