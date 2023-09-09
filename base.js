module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: ['simple-import-sort', 'import'],
  extends: ['airbnb-base', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "promise/always-return": [
      "error",
      {
        "ignoreLastCallback": true
      }
    ]
  },
};
