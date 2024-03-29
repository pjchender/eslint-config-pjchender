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
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    /**
     * Some rules listed here are duplicated with the rules in "react.js"
     * for preventing being overridden by other extensions.
     * */

    /**
     * new JSX transform
     * https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
     * */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Prevent the error of "JSX not allowed in files with extension '.tsx'"
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],

    // You May Not Need defaultProps
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/
    'react/require-default-props': 'off',

    /**
     * Prevent the error of "Missing file extension 'ts', 'tsx'"
     * https://stackoverflow.com/a/59268871
     * */
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

    // for preventing "'React' was used before it was defined"
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],


    // Not interested in consistent types of function components
    'react/function-component-definition': 'off',

    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        "ignoreVoid": true
      }
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
};
