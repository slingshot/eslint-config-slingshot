import { rules as baseStyleRules } from './base.js';

export const rules = {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    "react/display-name": "off",
    "react/require-default-props": "off",
    "react/no-unescaped-entities": "off",
    "@stylistic/jsx-indent": ["error", 4],
    "@stylistic/jsx-indent-props": ["error", 4],
    "react/prop-types": 0,
    "react/jsx-no-bind": "warn",
    "react/function-component-definition": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/jsx-key": "error",
    ...baseStyleRules,
};

// Default export for backward compatibility  
export default { rules };
