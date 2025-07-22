/**
 * Legacy ESLint 8 Configuration
 * 
 * This file provides backward compatibility for projects still using ESLint 8 
 * with the old .eslintrc configuration format.
 * 
 * For ESLint 9 and flat config, use the main exports instead.
 */

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        './base.js',
        './rules/airbnb/react-a11y',
        './rules/airbnb/react-hooks',
        './rules/airbnb/react',
        './rules/ts/react',
        './rules/slingshot/react',
    ].map(require.resolve),
    settings: {
        react: {
            version: "detect"
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
    },
}; 