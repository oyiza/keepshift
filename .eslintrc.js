module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: ['@typescript-eslint'],
    // parser: '@typescript-eslint/parser',
    // parserOptions: {
    //     project: './tsconfig.json',
    //     tsconfigRootDir: __dirname,
    // },
    env: {
        node: true,
        browser: true
    },
};