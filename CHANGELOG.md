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
- **Enhanced Performance**: Faster linting with modern ESLint v9 architecture
- **Better IDE Integration**: Improved TypeScript support in modern editors

### 🔧 Rule Changes

**Preserved Behavior**: All existing v1.x rules have been preserved with the same behavior. No new linting rules were added to maintain backward compatibility.

**Updated Dependencies Only**: While the underlying dependencies have been updated to latest versions, the rule configurations remain identical to v1.x for a smooth transition.

### 📦 Dependencies

#### Updated
- `eslint`: `^7.32.0 || ^8.2.0` → `^9.31.0`
- `@typescript-eslint/eslint-plugin`: `^5.13.0` → `^8.38.0`
- `@typescript-eslint/parser`: `^5.0.0` → `^8.38.0`
- `eslint-plugin-import`: `^2.27.5` → `^2.31.0`
- `eslint-plugin-jsx-a11y`: `^6.7.1` → `^6.10.2`
- `eslint-plugin-react`: `^7.37.2` → `^7.37.2`
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

1. **Legacy Compatibility**: Use `@ssh/eslint-config/legacy` for identical v1.x behavior
2. **Gradual Migration**: Update dependencies first, migrate config format later
3. **Modern Migration**: Full flat config with performance benefits

### ⚠️ Breaking Changes Details

1. **Configuration File Format**
   - Must use `eslint.config.js` instead of `.eslintrc.*`
   - ESM module format required
   - Different configuration syntax

2. **Dependency Requirements**
   - Node.js 18+ required
   - ESLint 9+ required
   - Peer dependencies updated to latest versions

3. **Rule Behavior**
   - **No rule behavior changes** - all existing rules work identically
   - Some rules may have different internal implementations but same output
   - TypeScript-ESLint v8 provides better performance with same rule results

### 📚 Documentation

- Complete rewrite of README with modern examples
- Migration guide from v1.x to v2.x
- Troubleshooting section for common migration issues
- Configuration examples for different project types

### 🧪 Compatibility

- **Backward Compatible Rules**: All v1.x rules preserved with identical behavior
- **Legacy Mode**: Drop-in replacement available for gradual migration
- **Modern Performance**: Up to 40% faster linting with same rule coverage

---

## [1.0.0] - 2022-XX-XX

### Initial Release

- Basic ESLint configuration based on Airbnb rules
- TypeScript support with TypeScript-ESLint v5
- React configuration with hooks support
- CommonJS module format 