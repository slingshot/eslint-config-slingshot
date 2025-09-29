import reactConfig from '@ssh/eslint-config/react';

export default [
    ...reactConfig,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];
