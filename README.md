# @ssh/eslint-config

Slingshot's ESLint configuration for JavaScript, TypeScript, and React projects.

## Requirements

- **Node.js**: 12.20.0 or higher (ESM support required)
- **ESLint**: 9.34.0 or higher
- **Package Format**: This package uses ESM (ECMAScript Modules)

**Note**: Version 2.x requires ESM. If you need CommonJS support, use version 1.x.

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

## Available Configurations

This package provides three different configurations:

- **`@ssh/eslint-config`** (default): Base configuration for JavaScript projects
- **`@ssh/eslint-config/typescript`**: Full configuration for Typescript
- **`@ssh/eslint-config/react`**: Full configuration for React
- **`@ssh/eslint-config/base`**: Alias for the default base configuration

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