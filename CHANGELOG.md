# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-XX

### 🚀 Major Changes

- **BREAKING**: Upgraded to ESLint v9 with flat config format
- **BREAKING**: Updated to TypeScript-ESLint v8.38.0 (from v5.13.0)
- **BREAKING**: Minimum Node.js version is now 18.18.0+
- **BREAKING**: Configuration format changed from `.eslintrc` to `eslint.config.js`

### ✨ New Features

- **Modern Flat Config**: Full ESLint v9 flat config support with `defineConfig`
- **Modular Exports**: Separate configurations for different use cases
  - `@ssh/eslint-config` - Full React + TypeScript config
  - `@ssh/eslint-config/base` - TypeScript-only config
  - `@ssh/eslint-config/react` - React configuration
  - `@ssh/eslint-config/legacy` - Compatibility mode for gradual migration
- **Enhanced TypeScript Support**: Advanced type-aware linting rules
- **React 18+ Patterns**: Modern React linting with new JSX transform support
- **Performance Improvements**: Faster linting with optimized rule configurations

### 🔧 Enhanced Rules

#### TypeScript Rules (Updated)
- Updated `@typescript-eslint/consistent-type-imports` with better options
- Added `@typescript-eslint/no-import-type-side-effects` for cleaner imports
- Added `@typescript-eslint/prefer-nullish-coalescing` for modern patterns
- Added `@typescript-eslint/prefer-optional-chain` for safer property access
- Improved `@typescript-eslint/no-unused-vars` with better pattern matching

#### React Rules (Enhanced)
- Updated for React 18+ patterns
- Added `react/no-unstable-nested-components` warning
- Added `react/hook-use-state` for better hook usage
- Improved JSX prop spreading rules with better configuration
- Enhanced accessibility rules with latest jsx-a11y plugin

#### Import Rules (Modernized)
- Better support for modern module resolution
- Improved TypeScript integration
- Enhanced file extension handling

### 📦 Dependencies

#### Updated
- `eslint`: `^7.32.0 || ^8.2.0` → `^9.31.0`
- `@typescript-eslint/eslint-plugin`: `^5.13.0` → `^8.38.0`
- `@typescript-eslint/parser`: `^5.0.0` → `^8.38.0`
- `eslint-plugin-import`: `^2.27.5` → `^2.31.0`
- `eslint-plugin-jsx-a11y`: `^6.7.1` → `^6.10.2`
- `eslint-plugin-react`: `^7.32.2` → `^7.37.2`
- `eslint-plugin-react-hooks`: `^4.6.0` → `^5.0.0`

#### Added
- `@eslint/js`: `^9.31.0` - Modern JavaScript configuration
- `globals`: `^15.14.0` - Global variable definitions
- `typescript-eslint`: `^8.38.0` - Unified TypeScript ESLint package

### 🛠 Configuration Changes

#### New Format
```js
// Old: .eslintrc.js
module.exports = {
  extends: ['@ssh/eslint-config']
};

// New: eslint.config.js  
import config from '@ssh/eslint-config';
export default config;
```

#### Improved Modularity
- Split configurations for different use cases
- Better file targeting with glob patterns
- Cleaner rule organization

### 🔄 Migration Path

1. **Automatic Migration**: Legacy compatibility mode available
2. **Gradual Migration**: Use `@ssh/eslint-config/legacy` for transition period
3. **Full Migration**: Modern flat config with all new features

### ⚠️ Breaking Changes Details

1. **Configuration File Format**
   - Must use `eslint.config.js` instead of `.eslintrc.*`
   - ESM module format required
   - Different rule application syntax

2. **Rule Behavior Changes**
   - Some TypeScript rules have new default behaviors
   - Import rules updated for modern module resolution
   - React rules updated for React 18+ patterns

3. **Dependency Requirements**
   - Node.js 18+ required
   - ESLint 9+ required
   - Peer dependencies updated to latest versions

### 📚 Documentation

- Complete rewrite of README with modern examples
- Migration guide for v1.x users
- Troubleshooting section for common issues
- Configuration examples for different project types

### 🧪 Testing

- Added test configurations for validation
- Improved rule testing coverage
- Better error message examples

---

## [1.0.0] - 2022-XX-XX

### Initial Release

- Basic ESLint configuration based on Airbnb rules
- TypeScript support with TypeScript-ESLint v5
- React configuration with hooks support
- CommonJS module format 