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
     * 有些規則和 react 中的重複，是因為會被 extends 中的其他規則覆蓋
     * */

    // new JSX transform
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    /* 避免出現 JSX not allowed in files with extension '.tsx' */
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],

    /* 避免出現 'React' was used before it was defined */
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

    /* 必須建議使用 default export */
    'import/prefer-default-export': 'off',

    /**
     * 避免出現 'React' was used before it was defined 的錯誤
     * Use function hoisting to improve code readability
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],

    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
