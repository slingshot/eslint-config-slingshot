/**
 * Legacy Base Configuration (CommonJS)
 *
 * This provides the base JavaScript/TypeScript rules for ESLint 8
 * compatibility using CommonJS module format.
 */

module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },

    extends: [
        'eslint:recommended',
        './rules/airbnb/best-practices',
        './rules/airbnb/errors',
        './rules/airbnb/style',
        './rules/airbnb/variables',
        './rules/airbnb/imports',
        './rules/slingshot/base',
    ].map(require.resolve),

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: [
        'import',
        '@stylistic',
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
};