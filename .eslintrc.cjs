require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        'plugin:unicorn/recommended',
        '@vue/prettier',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    plugins: ['unicorn'],
    rules: {
        'no-console': 'error',
        'no-debugger': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'unicorn/filename-case': 'off',
        'prettier/prettier': [
            'error',
            {},
            {
                usePrettierrc: true,
            },
        ],
    },
};
