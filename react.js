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

    // React-specific overrides
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

            // Update import extensions for React
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

            // Slingshot-specific React overrides
            ...slingshotReactRules.rules,
        },
    },
]); 