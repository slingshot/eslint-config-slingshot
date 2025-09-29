module.exports = {
  extends: ['@ssh/eslint-config/legacy'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};