module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: ['promise'],
  extends: [
    './base',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Allow JSX not allowed in files with extension '.js'
    'react/jsx-filename-extension': 'off',

    // new JSX transform
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    "react/display-name": "off",
    "react/jsx-no-bind": "off",

    /* Allow 'React' was used before it was defined */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    'import/prefer-default-export': 'off',

    // for preventing "'React' was used before it was defined"
    'no-use-before-define': 'off',

    // Not interested in consistent types of function components
    'react/function-component-definition': 'off',

    // asserts that the label has htmlFor, a nested label, both or either.
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
};
