/** @type {import('@types/eslint').Linter.Config} */
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
