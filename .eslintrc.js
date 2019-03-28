module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    mocha: true,
    commonjs: true,
  },
  plugins: ["prettier"],
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  globals: {
    test: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": "error",
    "global-require": 0,
  },
};