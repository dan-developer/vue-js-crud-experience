/* eslint quote-props: ["error", "as-needed", { "keywords": true, "unnecessary": false }] */

module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'tsx': true,
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'never'],
        'quotes': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        'class-methods-use-this': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-for': 'off',
        'object-curly-spacing': 'off',
        'indent': ['error', 4],
        'prefer-const': ['warn', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false,
        }],
        'no-trailing-spaces': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
