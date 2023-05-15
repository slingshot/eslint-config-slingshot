module.exports = {
    'extends': [
        './rules/airbnb/best-practices',
        './rules/airbnb/errors',
        './rules/airbnb/es6',
        './rules/airbnb/imports',
        './rules/airbnb/node',
        './rules/airbnb/strict',
        './rules/airbnb/style',
        './rules/airbnb/variables',
        './rules/ts/base',
        './rules/slingshot/base',
    ].map(require.resolve),
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
};
