export const rules = {
    "linebreak-style": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 4],
    "import/prefer-default-export": 0,
    "max-len": "off",
    "no-console": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "function-paren-newline": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    // Following rule is temporarily disabled due to a WebStorm bug
    "import/no-extraneous-dependencies": "off",
};

// Default export for backward compatibility  
export default { rules };
