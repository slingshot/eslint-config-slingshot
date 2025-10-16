import { rules as baseBestPracticesRules } from '../../airbnb/best-practices.js';
import { rules as baseES6Rules } from '../../airbnb/es6.js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

// Plugin configuration for flat config
export const plugins = {
    '@typescript-eslint': typescriptEslint,
};

// Language options for flat config
export const languageOptions = {
    parser: tsParser,
};

// Settings for flat config
export const settings = {
    // Apply special parsing for TypeScript files
    'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    // Original: ['.mjs', '.js', '.json']
    'import/resolver': {
        node: {
            extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
        },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    // Original: ['.js', '.mjs', '.jsx']
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
};

export const rules = {
    // Replace Airbnb 'brace-style' rule with '@stylistic' version
    // https://eslint.style/rules/ts/brace-style
    'brace-style': 'off',
    '@stylistic/brace-style': baseBestPracticesRules['@stylistic/brace-style'] || ['error', '1tbs', { allowSingleLine: true }],

    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    camelcase: 'off',
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore`
    // settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
        'error',
        // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
        {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        // Allow camelCase functions (23.2), and PascalCase functions (23.8)
        {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
        },
        // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript
        // recommendations, we are assuming this rule would similarly apply to anything "type like", including
        // interfaces, type aliases, and enums
        {
            selector: 'typeLike',
            format: ['PascalCase'],
        },
    ],

    // Replace Airbnb 'comma-dangle' rule with '@stylistic' version
    // https://eslint.style/rules/ts/comma-dangle
    'comma-dangle': 'off',
    '@stylistic/comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            enums: 'always-multiline',
            generics: 'always-multiline',
            tuples: 'always-multiline',
        },
    ],

    // Replace Airbnb 'comma-spacing' rule with '@stylistic' version
    // https://eslint.style/rules/ts/comma-spacing
    'comma-spacing': 'off',
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],

    // Replace Airbnb 'default-param-last' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': baseBestPracticesRules['default-param-last'],

    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    // Replace Airbnb 'func-call-spacing' rule with '@stylistic' version
    // https://eslint.style/rules/ts/function-call-spacing
    'func-call-spacing': 'off',
    '@stylistic/function-call-spacing': ['error', 'never'],

    // Replace Airbnb 'indent' rule with '@stylistic' version
    // https://eslint.style/rules/ts/indent
    indent: 'off',
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        ignoreComments: false
    }],

    // Replace Airbnb 'keyword-spacing' rule with '@stylistic' version
    // https://eslint.style/rules/ts/keyword-spacing
    'keyword-spacing': 'off',
    '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
        overrides: {
            return: { after: true },
            throw: { after: true },
            case: { after: true }
        }
    }],

    // Replace Airbnb 'lines-between-class-members' rule with '@stylistic' version
    // https://eslint.style/rules/ts/lines-between-class-members
    'lines-between-class-members': 'off',
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', {
        allow: [
            'arrowFunctions',
            'functions',
            'methods',
        ]
    }],

    // Replace Airbnb 'no-extra-parens' rule with '@stylistic' version
    // https://eslint.style/rules/ts/no-extra-parens
    'no-extra-parens': 'off',
    '@stylistic/no-extra-parens': ['off', 'all', {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
    }],

    // Replace Airbnb 'no-extra-semi' rule with '@stylistic' version
    // https://eslint.style/rules/ts/no-extra-semi
    'no-extra-semi': 'off',
    '@stylistic/no-extra-semi': 'error',

    // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // Replace Airbnb 'no-loss-of-precision' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['off', {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
    }],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Replace Airbnb 'space-before-blocks' rule with '@stylistic' version
    // https://eslint.style/rules/ts/space-before-blocks
    'space-before-blocks': 'off',
    '@stylistic/space-before-blocks': 'error',

    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/only-throw-error.md
    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': 'error',

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
    }],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Replace Airbnb 'quotes' rule with '@stylistic' version
    // https://eslint.style/rules/ts/quotes
    quotes: 'off',
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // Replace Airbnb 'semi' rule with '@stylistic' version
    // https://eslint.style/rules/ts/semi
    semi: 'off',
    '@stylistic/semi': ['error', 'always'],

    // Replace Airbnb 'space-before-function-paren' rule with '@stylistic' version
    // https://eslint.style/rules/ts/space-before-function-paren
    'space-before-function-paren': 'off',
    '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
    }],

    // Replace Airbnb 'require-await' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    // Replace Airbnb 'no-return-await' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'no-return-await': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    // Replace Airbnb 'space-infix-ops' rule with '@stylistic' version
    // https://eslint.style/rules/ts/space-infix-ops
    'space-infix-ops': 'off',
    '@stylistic/space-infix-ops': 'error',

    // Replace Airbnb 'object-curly-spacing' rule with '@stylistic' version
    // https://eslint.style/rules/ts/object-curly-spacing
    'object-curly-spacing': 'off',
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // Slingshot TypeScript-specific rule
    '@typescript-eslint/consistent-type-imports': 'error',

    // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        },
    ],

    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: [
                'test/**', // tape, common npm pattern
                'tests/**', // also common npm pattern
                'spec/**', // mocha, rspec-like pattern
                '**/__tests__/**', // jest pattern
                '**/__mocks__/**', // jest pattern
                'test.{js,jsx,ts,tsx}', // repos with a single test file
                'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
                '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
                '**/jest.config.js', // jest config
                '**/jest.setup.js', // jest setup
                '**/vue.config.js', // vue-cli config
                '**/webpack.config.js', // webpack config
                '**/webpack.config.*.js', // webpack config
                '**/rollup.config.js', // rollup config
                '**/rollup.config.*.js', // rollup config
                '**/gulpfile.js', // gulp config
                '**/gulpfile.*.js', // gulp config
                '**/Gruntfile{,.js}', // grunt config
                '**/protractor.conf.js', // protractor config
                '**/protractor.conf.*.js', // protractor config
                '**/karma.conf.js', // karma config
                '**/.eslintrc.js' // eslint config
            ],
            optionalDependencies: false,
        },
    ],
};

export const overrides = [
    {
        name: 'ssh_typescript_overrides',
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the
            // TypeScript compiler Some of the rules also fail in TypeScript files, for example:
            // https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586 Rules are
            // inspired by:
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
            'constructor-super': 'off',
            'getter-return': 'off',
            'no-const-assign': 'off',
            'no-dupe-args': 'off',
            'no-dupe-class-members': 'off',
            'no-dupe-keys': 'off',
            'no-func-assign': 'off',
            'no-import-assign': 'off',
            'no-new-symbol': 'off',
            'no-obj-calls': 'off',
            'no-redeclare': 'off',
            'no-setter-return': 'off',
            'no-this-before-super': 'off',
            'no-undef': 'off',
            'no-unreachable': 'off',
            'no-unsafe-negation': 'off',
            'valid-typeof': 'off',
            // The following rules are enabled in Airbnb config, but are recommended to be disabled within
            // TypeScript projects See:
            // https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
            'import/named': 'off',
            'import/no-named-as-default-member': 'off',
            // Disable `import/no-unresolved`, see README.md for details
            'import/no-unresolved': 'off',
        },
    },
];

// Default export for compatibility
export default {
    plugins,
    languageOptions,
    settings,
    rules,
    overrides,
};
