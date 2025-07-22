# @ssh/eslint-config

Slingshot's ESLint configuration for JavaScript, TypeScript, and React projects.

## Installation

```bash
npm install --save-dev @ssh/eslint-config
```

### Peer Dependencies

Install the required peer dependencies:

```bash
# For ESLint 9 (flat config)
npm install --save-dev \
  eslint@^9.0.0 \
  @stylistic/eslint-plugin@^2.0.0 \
  @typescript-eslint/eslint-plugin@^8.0.0 \
  @typescript-eslint/parser@^8.0.0 \
  eslint-plugin-import@^2.29.0 \
  eslint-plugin-jsx-a11y@^6.8.0 \
  eslint-plugin-react@^7.33.0 \
  eslint-plugin-react-hooks@^4.6.0
```

## Usage

### ESLint 9 (Flat Config) - Recommended

Create an `eslint.config.js` file in your project root:

#### Full Configuration (React + TypeScript)
```javascript
import config from '@ssh/eslint-config';

export default config;
```

#### Base Configuration (No React)
```javascript
import base from '@ssh/eslint-config/base';

export default base;
```

#### Custom Configuration
```javascript
import config from '@ssh/eslint-config';

export default [
  ...config,
  {
    // Your custom rules
    rules: {
      'no-console': 'warn',
    }
  }
];
```

### ESLint 8 (Legacy) - Deprecated

⚠️ **Note**: ESLint 8 support is deprecated. Please upgrade to ESLint 9 for the best experience.

Create an `.eslintrc.js` file:

```javascript
module.exports = {
  extends: ['@ssh/eslint-config/legacy'],
};
```

## Configurations

### Full Configuration (`@ssh/eslint-config`)
- **File patterns**: All JavaScript, TypeScript, JSX, and TSX files
- **Includes**: 
  - Airbnb's JavaScript style guide rules
  - TypeScript-specific rules with proper overrides
  - React and React Hooks rules
  - JSX accessibility rules
  - ESLint Stylistic formatting rules
  - Slingshot custom rules
- **Use case**: React applications with TypeScript support

### Base Configuration (`@ssh/eslint-config/base`)
- **File patterns**: JavaScript and TypeScript files (no JSX)
- **Includes**:
  - Airbnb's JavaScript style guide rules  
  - TypeScript-specific rules
  - ESLint Stylistic formatting rules
  - Slingshot custom rules
- **Use case**: Node.js applications, libraries, or non-React projects

## Migration from ESLint 8

### Step 1: Update Dependencies
```bash
npm install --save-dev eslint@^9.0.0 @stylistic/eslint-plugin@^2.0.0 @typescript-eslint/eslint-plugin@^8.0.0 @typescript-eslint/parser@^8.0.0
```

### Step 2: Replace Configuration File
Replace your `.eslintrc.*` file with `eslint.config.js`:

**Before (.eslintrc.js):**
```javascript
module.exports = {
  extends: ['@ssh'],
};
```

**After (eslint.config.js):**
```javascript
import config from '@ssh/eslint-config';

export default config;
```

### Step 3: Update Scripts
Flat config is automatically detected by ESLint 9. Your existing scripts should work without changes.

## What's New in v2.0

- **ESLint 9 Support**: Full compatibility with ESLint 9 and flat config system
- **ESLint Stylistic Integration**: All formatting rules now use [@eslint.style](https://eslint.style/) for future-proof formatting
- **Updated Dependencies**: All plugins updated to their latest ESLint 9-compatible versions
- **Better TypeScript Integration**: Improved TypeScript rule handling and performance
- **Modern Module System**: Now uses ES modules by default
- **Backward Compatibility**: Legacy export available for ESLint 8 users

## ESLint Stylistic Integration

This configuration uses **[ESLint Stylistic](https://eslint.style/)** for all formatting rules. This provides:

✅ **Future-proof formatting** - ESLint 9 removed many built-in formatting rules  
✅ **Consistent styling** - All formatting rules in one place  
✅ **TypeScript-aware** - Proper handling of TypeScript syntax  
✅ **JSX support** - React/JSX formatting included  

### Stylistic Rules Included

The configuration includes comprehensive formatting rules:

```javascript
// Spacing and indentation
"@stylistic/indent": ["error", 4]              // 4-space indentation (Slingshot override)
"@stylistic/quotes": ["error", "single"]       // Single quotes
"@stylistic/semi": ["error", "always"]         // Always semicolons

// Object and array formatting  
"@stylistic/object-curly-spacing": ["error", "always"]
"@stylistic/comma-dangle": ["error", "always-multiline"]

// JSX formatting (React files)
"@stylistic/jsx-indent": ["error", 4]
"@stylistic/jsx-indent-props": ["error", 4]
```

## Rule Customizations

### Slingshot-Specific Rules

This config includes several customizations from the standard Airbnb config:

```javascript
// Indentation set to 4 spaces (via @stylistic)
"@stylistic/indent": ["error", 4]

// Import/export preferences
"import/prefer-default-export": "off"

// Console logging allowed
"no-console": "off"

// Type imports enforced
"@typescript-eslint/consistent-type-imports": "error"
```

### TypeScript Integration

The configuration automatically:
- Disables JavaScript rules that conflict with TypeScript
- Enables TypeScript-aware versions of ESLint rules
- Uses @stylistic equivalents for TypeScript formatting rules
- Configures import resolution for `.ts` and `.tsx` files
- Sets up proper parsing for TypeScript files

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with a sample project
5. Submit a pull request

## License

Apache-2.0 - See [LICENSE](LICENSE) file for details.
