export const rules = {
    "@stylistic/indent": ["error", 4],
    "import/prefer-default-export": 0,
    "@stylistic/max-len": "off",
    "no-console": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@stylistic/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    // Following rule is temporarily disabled due to a WebStorm bug
    "import/no-extraneous-dependencies": "off",

    'no-unused-vars': 'off',
};

// Default export for backward compatibility  
export default { rules };
