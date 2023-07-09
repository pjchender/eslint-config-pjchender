module.exports = {
  extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.{test,spec}.{ts,tsx}'],
      },
    ],
  },
};
