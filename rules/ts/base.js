import { rules, settings, plugins, languageOptions, overrides } from './lib/shared.js';

// Export individual components for flat config
export { rules, settings, plugins, languageOptions, overrides };

// Default export for flat config compatibility
export default {
    plugins,
    languageOptions,
    settings,
    rules,
    overrides,
};
