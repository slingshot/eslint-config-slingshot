# @ssh/eslint-config

Slingshot's ESLint configuration for JavaScript, TypeScript, and React projects.

## Installation

```bash
pnpm add -D @ssh/eslint-config
```

### Peer Dependencies

You need to install all peer dependencies for this package to work. Choose your installation method based on your project needs:

#### For Base Configuration (JavaScript Only)

```bash
pnpm add -D \
  eslint@^9.34.0 \
  @stylistic/eslint-plugin@^5.2.0 \
  eslint-plugin-import@^2.29.0
```

#### For Typescript Configuration

```bash
pnpm add -D \
  eslint-plugin-import@^2.29.0 \
  @typescript-eslint/eslint-plugin@^8.41.0 \
  @typescript-eslint/parser@^8.41.0
```

#### For React Configuration

```bash
pnpm add -D \
  eslint-plugin-import@^2.29.0 \
  eslint-plugin-jsx-a11y@^6.10.0 \
  eslint-plugin-react@^7.37.0 \
  eslint-plugin-react-hooks@^7.0.0
```

**Note**: If you only need base JavaScript/TypeScript linting, you can skip the React plugins. If you use the React configuration, all dependencies are required.

## Available Configurations

This package provides three different configurations:

- **`@ssh/eslint-config`** (default): Base configuration for JavaScript/TypeScript projects
- **`@ssh/eslint-config/typescript`**: Full configuration for Typescript
- **`@ssh/eslint-config/react`**: Full configuration for React
- **`@ssh/eslint-config/base`**: Alias for the default base configuration
- **`@ssh/eslint-config/legacy`**: ESLint 8 compatibility (deprecated)

## Usage

### ESLint 9 Flat Config

Create an `eslint.config.js` file in your project root:

#### Base Configuration (JavaScript/TypeScript Only) - Default
```javascript
import config from '@ssh/eslint-config';

export default config;
```


#### React + Typescript Configuration
```javascript
import reactConfig from '@ssh/eslint-config/react';
import typescriptConfig from '@ssh/eslint-config/typescript';
import baseConfig from '@ssh/eslint-config/base';

export default [
  ...reactConfig,
  ...baseConfig,
  ...typescriptConfig,
];
```

**Note**: This configuration requires ALL peer dependencies including the React plugins listed above.

#### Next.js Projects

For Next.js projects, combine with Next.js's official ESLint config:

```bash
pnpm add -D @next/eslint-config-next
```

```javascript
import reactConfig from '@ssh/eslint-config/react';
import typescriptConfig from '@ssh/eslint-config/typescript';
import baseConfig from '@ssh/eslint-config/base';
import nextConfig from '@next/eslint-config-next';

export default [
  ...nextConfig,
  ...reactConfig,
  ...baseConfig,
  ...typescriptConfig,
];
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

## License

Apache-2.0 - See [LICENSE](LICENSE) file for details.
