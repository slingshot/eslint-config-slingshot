export const rules = {
    // enforce linebreaks after opening and before closing array brackets
    // https://eslint.style/rules/default/array-bracket-newline
    '@stylistic/array-bracket-newline': ['off', 'consistent'],

    // enforce spacing inside array brackets
    // https://eslint.style/rules/default/array-bracket-spacing
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // enforce linebreaks after opening and before closing array brackets
    // https://eslint.style/rules/default/array-element-newline
    '@stylistic/array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // Require parentheses around arrow function arguments
    // https://eslint.style/rules/default/arrow-parens
    '@stylistic/arrow-parens': ['error', 'always'],

    // Require space before/after arrow function's arrow
    // https://eslint.style/rules/default/arrow-spacing
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

    // enforce spacing inside single-line blocks
    // https://eslint.style/rules/default/block-spacing
    '@stylistic/block-spacing': ['error', 'always'],

    // enforce one true brace style
    // https://eslint.style/rules/default/brace-style
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require trailing commas in multiline object literals
    // https://eslint.style/rules/default/comma-dangle
    '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
    }],

    // enforce spacing before and after comma
    // https://eslint.style/rules/default/comma-spacing
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    // https://eslint.style/rules/default/comma-style
    '@stylistic/comma-style': ['error', 'last', {
        exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
        }
    }],

    // disallow padding inside computed properties
    // https://eslint.style/rules/default/computed-property-spacing
    '@stylistic/computed-property-spacing': ['error', 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    // https://eslint.style/rules/default/eol-last
    '@stylistic/eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // https://eslint.style/rules/default/function-call-spacing
    '@stylistic/function-call-spacing': ['error', 'never'],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.style/rules/default/function-paren-newline
    '@stylistic/function-paren-newline': ['error', 'consistent'],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.style/rules/default/implicit-arrow-linebreak
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.style/rules/default/indent
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
            parameters: 1,
            body: 1
        },
        FunctionExpression: {
            parameters: 1,
            body: 1
        },
        CallExpression: {
            arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        ignoreComments: false
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.style/rules/default/jsx-quotes
    '@stylistic/jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    // https://eslint.style/rules/default/key-spacing
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // https://eslint.style/rules/default/keyword-spacing
    '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
        overrides: {
            return: { after: true },
            throw: { after: true },
            case: { after: true }
        }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.style/rules/default/linebreak-style
    '@stylistic/linebreak-style': ['error', 'unix'],

    // require or disallow an empty line between class members
    // https://eslint.style/rules/default/lines-between-class-members
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // specify the maximum length of a line in your program
    // https://eslint.style/rules/default/max-len
    '@stylistic/max-len': ['error', 100, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
    }],

    // require a capital letter for constructors
    // https://eslint.style/rules/default/new-parens
    '@stylistic/new-parens': 'error',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.style/rules/default/newline-per-chained-call
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // https://eslint.style/rules/default/no-array-constructor (not a style rule, but keeping here for consistency)
    'no-array-constructor': 'error',

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.style/rules/default/no-multiple-empty-lines
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow tab characters entirely
    // https://eslint.style/rules/default/no-tabs
    '@stylistic/no-tabs': 'error',

    // disallow trailing whitespace at the end of lines
    // https://eslint.style/rules/default/no-trailing-spaces
    '@stylistic/no-trailing-spaces': ['error', {
        skipBlankLines: false,
        ignoreComments: false,
    }],

    // disallow whitespace before properties
    // https://eslint.style/rules/default/no-whitespace-before-property
    '@stylistic/no-whitespace-before-property': 'error',

    // require padding inside curly braces
    // https://eslint.style/rules/default/object-curly-spacing
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // enforce line breaks between braces
    // https://eslint.style/rules/default/object-curly-newline
    '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.style/rules/default/object-property-newline
    '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
    }],

    // require a newline around variable declaration
    // https://eslint.style/rules/default/one-var-declaration-per-line
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.style/rules/default/operator-linebreak
    '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // disallow padding within blocks
    // https://eslint.style/rules/default/padded-blocks
    '@stylistic/padded-blocks': ['error', {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
    }, {
            allowSingleLineBlocks: true,
        }],

    // require quotes around object literal property names
    // https://eslint.style/rules/default/quote-props
    '@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    // https://eslint.style/rules/default/quotes
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.style/rules/default/semi
    '@stylistic/semi': ['error', 'always'],

    // enforce spacing before and after semicolons
    // https://eslint.style/rules/default/semi-spacing
    '@stylistic/semi-spacing': ['error', { before: false, after: true }],

    // require or disallow space before blocks
    // https://eslint.style/rules/default/space-before-blocks
    '@stylistic/space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // https://eslint.style/rules/default/space-before-function-paren
    '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
    }],

    // require or disallow spaces inside parentheses
    // https://eslint.style/rules/default/space-in-parens
    '@stylistic/space-in-parens': ['error', 'never'],

    // require spaces around operators
    // https://eslint.style/rules/default/space-infix-ops
    '@stylistic/space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // https://eslint.style/rules/default/space-unary-ops
    '@stylistic/space-unary-ops': ['error', {
        words: true,
        nonwords: false,
        overrides: {},
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.style/rules/default/spaced-comment
    '@stylistic/spaced-comment': ['error', 'always', {
        line: {
            exceptions: ['-', '+'],
            markers: ['=', '!'], // space here to support sprockets directives
        },
        block: {
            exceptions: ['-', '+'],
            markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
            balanced: true,
        }
    }],

    // Enforce spacing around colons of switch statements
    // https://eslint.style/rules/default/switch-colon-spacing
    '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.style/rules/default/template-tag-spacing
    '@stylistic/template-tag-spacing': ['error', 'never'],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.style/rules/default/unicode-bom
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
};

// Default export for backward compatibility  
export default { rules };
