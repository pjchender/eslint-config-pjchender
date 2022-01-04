module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    './react',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    /**
     * Some rules listed here are duplicated with the rules in "react.js"
     * for preventing being overridden by other extensions.
     **/

    /**
     * new JSX transform
     * https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
     **/
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Prevent the error of "JSX not allowed in files with extension '.tsx'"
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],

    /**
     * Prevent the error of "Missing file extension 'ts', 'tsx'"
     * https://stackoverflow.com/a/59268871
     **/
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/prefer-default-export': 'off',

    // for preventing "'React' was used before it was defined"
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],

    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',

    // Not interested in consistent types of function components
    'react/function-component-definition': 'off',
  },
};
