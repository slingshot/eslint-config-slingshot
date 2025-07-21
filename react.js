import { defineConfig } from "eslint/config";
import baseConfig from "./base.js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import slingshotReactRules from "./rules/slingshot/react.js";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
    // Extend base configuration
    ...baseConfig,

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
]); 