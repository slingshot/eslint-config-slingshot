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

    // TypeScript-specific configuration
    {
        files: ["**/*.{ts,mts,cts}"],
        extends: [...tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
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
            
            // Import rules
            "import/prefer-default-export": "off",
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    js: "never",
                    ts: "never",
                },
            ],

            // Slingshot-specific overrides
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
                ...globals.es2024,
            },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            // Import rules for JS
            "import/prefer-default-export": "off",
        },
    },
]);
