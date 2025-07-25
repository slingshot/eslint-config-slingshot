# @ssh/eslint-config

Slingshot's ESLint configuration for JavaScript, TypeScript, and React projects.

## Installation

```bash
npm install --save-dev @ssh/eslint-config
```

### Peer Dependencies

Install the required peer dependencies:

```bash
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

## License

Apache-2.0 - See [LICENSE](LICENSE) file for details.
