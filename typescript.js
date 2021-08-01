const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // for eslint-plugin-import
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    '@typescript-eslint/no-unused-vars': 'off', // 這個規則原本 ts 就內建了

    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: false,
        ignoreTypeReferences: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts', '**/*.stories.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    node: {
      extensions: allExtensions,
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': './src',
        },
        extensions: allExtensions,
      },
    },
  },
};
