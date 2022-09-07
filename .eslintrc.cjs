/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [
        '@vue/eslint-config-typescript',
        'plugin:vue/vue3-strongly-recommended',
        'eslint:recommended',
    ],
    rules: {
        // js
        'object-curly-newline': ['error', { 'minProperties': 10, 'consistent': true }],
        'indent': ['error', 4, { 'SwitchCase': 1, 'VariableDeclarator': 'first' }],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': 'off',

        // about spacing
        'keyword-spacing': 'off',
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'key-spacing': ['error', { 'mode': 'strict' }],
        'object-curly-spacing': 'off',
        'space-before-blocks': 'off',
        'no-trailing-spaces': 'error',
        'no-multi-spaces': 'error',
        'space-infix-ops': 'error',
        'block-spacing': 'error',
        'semi-spacing': 'error',

        // vue
        'vue/script-indent': ['error', 4, {
            'switchCase': 1,
        }],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 'off',
        'vue/script-setup-uses-vars': 'error',

        // typescript
        '@typescript-eslint/naming-convention': ['error', {
            selector: 'typeLike',
            format: ['PascalCase'],
        }],
        '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
        '@typescript-eslint/space-before-function-paren': ['error'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/space-before-blocks': ['error'],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/keyword-spacing': ['error', { 'before': true, 'after': true }],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'semi',
                    'requireLast': true
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false
                }
            }
        ],

    },
    overrides: [
        {
            files: [
                'cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'
            ],
            extends: [
                'plugin:cypress/recommended'
            ]
        }
    ]
};
