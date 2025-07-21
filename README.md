# @ssh/eslint-config

> Slingshot's ESLint configuration for JavaScript, TypeScript, and React projects - now with ESLint v9 flat config support

## Features

- ✨ **Modern**: Built for ESLint v9 with flat config format
- 🎯 **TypeScript-first**: Advanced TypeScript linting with type-aware rules
- ⚛️ **React-ready**: Includes React, JSX, and accessibility rules
- 📦 **Modular**: Choose exactly what you need
- 🚀 **Performance**: Optimized configuration for fast linting
- 🔧 **Customizable**: Easy to extend and override

## Installation

```bash
npm install --save-dev @ssh/eslint-config
```

### Peer Dependencies

You'll also need to install the following peer dependencies:

```bash
npm install --save-dev \
  @typescript-eslint/eslint-plugin@^8.38.0 \
  @typescript-eslint/parser@^8.38.0 \
  eslint@^9.31.0 \
  eslint-plugin-import@^2.31.0 \
  typescript@>=4.8.4
```

For React projects, additionally install:

```bash
npm install --save-dev \
  eslint-plugin-jsx-a11y@^6.10.2 \
  eslint-plugin-react@^7.37.2 \
  eslint-plugin-react-hooks@^5.0.0
```

## Usage

### For React + TypeScript Projects (Recommended)

Create an `eslint.config.js` file in your project root:

```js
// eslint.config.js
import config from '@ssh/eslint-config';

export default config;
```

### For TypeScript-only Projects

```js
// eslint.config.js
import config from '@ssh/eslint-config/base';

export default config;
```

### For React Projects

```js
// eslint.config.js
import config from '@ssh/eslint-config/react';

export default config;
```

### Customizing the Configuration

```js
// eslint.config.js
import { defineConfig } from 'eslint/config';
import baseConfig from '@ssh/eslint-config';

export default defineConfig([
    ...baseConfig,
    
    // Your custom rules
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            'no-console': 'warn',
        },
    },
    
    // Environment-specific overrides
    {
        files: ['**/*.test.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
]);
```

### Legacy Configuration (ESLint v8 compatibility)

If you need to use ESLint v8 or can't migrate to flat config immediately:

```js
// eslint.config.js
import legacyConfig from '@ssh/eslint-config/legacy';

export default legacyConfig;
```

## Configuration Files

### Available Configurations

| Import | Description |
|--------|-------------|
| `@ssh/eslint-config` | Full configuration with React and TypeScript |
| `@ssh/eslint-config/base` | TypeScript-only configuration |
| `@ssh/eslint-config/react` | Base + React configuration |
| `@ssh/eslint-config/legacy` | v1.x compatibility mode |

## Rules Overview

### TypeScript Rules

- ✅ Type-aware linting with project references
- ✅ Consistent type imports (`import type`)
- ✅ Modern TypeScript patterns (optional chaining, nullish coalescing)
- ✅ Strict naming conventions
- ✅ Advanced type safety rules

### React Rules

- ✅ React 18+ patterns and best practices
- ✅ Hooks linting with exhaustive deps
- ✅ JSX accessibility (a11y) rules
- ✅ Modern JSX transform support (no React import needed)
- ✅ TypeScript + JSX integration

### Import/Export Rules

- ✅ ES6 modules preferred
- ✅ Consistent file extensions
- ✅ Import sorting and organization
- ✅ No extraneous dependencies

## Migration from v1.x

### Breaking Changes

1. **ESLint v9 Required**: Minimum version is now ESLint v9.31.0
2. **Flat Config Only**: Legacy `.eslintrc` format is no longer supported
3. **Node.js 18+**: Requires Node.js 18.18.0 or higher
4. **TypeScript-ESLint v8**: Major version bump with rule changes
5. **New Configuration Format**: Must use `eslint.config.js`

### Step-by-Step Migration

1. **Update Dependencies**:
   ```bash
   npm install --save-dev @ssh/eslint-config@^2.0.0
   npm install --save-dev eslint@^9.31.0
   ```

2. **Replace Configuration File**:
   ```bash
   # Remove old config
   rm .eslintrc.js .eslintrc.json .eslintrc.yml
   
   # Create new config
   touch eslint.config.js
   ```

3. **Update Configuration**:
   ```js
   // Old: .eslintrc.js
   module.exports = {
     extends: ['@ssh/eslint-config'],
   };
   
   // New: eslint.config.js
   import config from '@ssh/eslint-config';
   export default config;
   ```

4. **Update package.json scripts**:
   ```json
   {
     "scripts": {
       "lint": "eslint .",
       "lint:fix": "eslint . --fix"
     }
   }
   ```

### Common Migration Issues

#### TypeScript-ESLint Rule Changes

Some rules have new options or behavior:

```js
// If you get new errors, you can temporarily disable them:
export default defineConfig([
    ...baseConfig,
    {
        rules: {
            // Adjust rules as needed
            '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
        },
    },
]);
```

#### Import Plugin Updates

The import plugin has been updated. If you see import-related errors:

```js
{
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
}
```

## Development

### Testing Your Configuration

```bash
# Test the configuration
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### Requirements

- Node.js 18.18.0+ or 20.9.0+ or 21.1.0+
- ESLint 9.31.0+
- TypeScript 4.8.4+

## License

Apache-2.0

## Contributing

Issues and PRs welcome! Please ensure your changes:

1. Are backwards compatible when possible
2. Include appropriate tests
3. Follow the existing code style
4. Update documentation as needed

---

**Upgrading from v1.x?** See our [Migration Guide](#migration-from-v1x) above.
