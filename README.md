# @ssh/eslint-config

Slingshot's ESLint configuration for JavaScript, TypeScript, and React projects.

## Installation

```bash
pnpm add -D @ssh/eslint-config
```

### Peer Dependencies

You need to install all peer dependencies for this package to work. Choose your installation method based on your project needs:

#### For Base Configuration (JavaScript/TypeScript Only)

```bash
pnpm add -D \
  eslint@^9.34.0 \
  @stylistic/eslint-plugin@^5.2.0 \
  @typescript-eslint/eslint-plugin@^8.41.0 \
  @typescript-eslint/parser@^8.41.0 \
  eslint-plugin-import@^2.29.0
```

#### For React Configuration (Includes Base + React)

```bash
pnpm add -D \
  eslint@^9.34.0 \
  @stylistic/eslint-plugin@^5.2.0 \
  @typescript-eslint/eslint-plugin@^8.41.0 \
  @typescript-eslint/parser@^8.41.0 \
  eslint-plugin-import@^2.29.0 \
  eslint-plugin-jsx-a11y@^6.10.0 \
  eslint-plugin-react@^7.37.0 \
  eslint-plugin-react-hooks@^5.2.0
```

**Note**: If you only need base JavaScript/TypeScript linting, you can skip the React plugins. If you use the React configuration, all dependencies are required.

## Available Configurations

This package provides three different configurations:

- **`@ssh/eslint-config`** (default): Base configuration for JavaScript/TypeScript projects
- **`@ssh/eslint-config/react`**: Full configuration with React + TypeScript support
- **`@ssh/eslint-config/base`**: Alias for the default base configuration
- **`@ssh/eslint-config/legacy`**: ESLint 8 compatibility (deprecated)

## Usage

### ESLint 9 (Flat Config) - Recommended

Create an `eslint.config.js` file in your project root:

#### Base Configuration (JavaScript/TypeScript Only) - Default
```javascript
import config from '@ssh/eslint-config';

export default config;
```

**Note**: This uses the base configuration and only requires the base dependencies (no React plugins needed).

#### React Configuration (React + TypeScript)
```javascript
import reactConfig from '@ssh/eslint-config/react';

export default reactConfig;
```

**Note**: This configuration requires ALL peer dependencies including the React plugins listed above.

#### Next.js Projects

For Next.js projects, combine with Next.js's official ESLint config:

```bash
pnpm add -D @next/eslint-config-next
```

```javascript
import reactConfig from '@ssh/eslint-config/react';
import nextConfig from '@next/eslint-config-next';

export default [
  ...reactConfig,
  ...nextConfig
];
```

**Note**: Next.js config should come after the Slingshot config to ensure Next.js-specific rules take precedence.

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

Install the required peer dependencies based on your project type. See the [Peer Dependencies](#peer-dependencies) section above for the exact commands.

### Step 2: Replace Configuration File
Replace your `.eslintrc.*` file with `eslint.config.js`:

**Before (.eslintrc.js):**
```javascript
module.exports = {
  extends: ['@ssh'],
};
```

**After (eslint.config.js):**

For base JavaScript/TypeScript projects:
```javascript
import config from '@ssh/eslint-config';

export default config;
```

For React projects:
```javascript
import reactConfig from '@ssh/eslint-config/react';

export default reactConfig;
```

### Step 3: Update Scripts
Flat config is automatically detected by ESLint 9. Your existing scripts should work without changes.

## License

Apache-2.0 - See [LICENSE](LICENSE) file for details.
