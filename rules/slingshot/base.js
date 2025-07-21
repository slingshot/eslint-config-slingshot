export default {
    rules: {
        "linebreak-style": "off",
        
        // Indentation - handled by TypeScript ESLint
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        
        // Import preferences
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off", // Temporarily disabled due to flat config transition
        
        // Line length
        "max-len": "off",
        
        // Console usage
        "no-console": "off",
        
        // TypeScript-specific rules
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off", // Handled at config level with better options
        "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "@typescript-eslint/consistent-type-imports": "error",
        
        // Modern TypeScript rules
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        
        // Accessibility
        "jsx-a11y/anchor-is-valid": "off",
        
        // Function formatting
        "function-paren-newline": "warn",
    },
};
