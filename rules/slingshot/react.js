export default {
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
        "react/display-name": "off",
        "react/require-default-props": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": "off", // TypeScript handles this
        "react/jsx-no-bind": "warn",
        "react/function-component-definition": "off",
        "react/jsx-no-useless-fragment": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/jsx-key": "error",
        
        // Modern React 18+ patterns
        "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
        "react/hook-use-state": "warn",
    }
};
