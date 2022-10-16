module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": "error",
        // 'indent': [
        //     'error',
        //     4
        // ],
        // 'linebreak-style': [
        //     'error',
        //     'unix'
        // ],
        // 'quotes': [
        //     'error',
        //     'double'
        // ],
        // 'semi': [
        //     'error',
        //     'always'
        // ]
    },
};
