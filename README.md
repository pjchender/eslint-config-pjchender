# eslint-config-pjchender

## Installation

```bash
# install the eslint-config-pjchender
npm install --save-dev eslint-config-pjchender

# install the peerDependencies of eslint-config-pjchender
npx install-peerdeps --dev eslint-config-pjchender
```

## Usage

### TypeScript (React)

In default, eslint-plugin-pjchender will use rules for TypeScript files. For preventing the conflict between ESLint and tsconfig, we recommend to create a `tsconfig.eslint.json` file. For example

```jsonc
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  // include all files in the project
  "include": ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "next-env.d.ts", ".eslintrc.js"],
  "exclude": ["node_modules", "build", "scripts"]
}
```

Then use this file as the `parseOptions.project`:

```jsonc
// .eslintrc
{
  // default will use rules included for TS files
  // and remember to use parseOptions to refer you tsconfig
  "extends": ["pjchender"],
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  }
}
```

### JavaScript (React)

Extends the config with the `extends` field in eslint config:

```jsonc
// .eslintrc
{
  // if you only need JavaScript and React related rules
  "extends": ["pjchender/react"]
}
```

### TypeScript

For projects only use TypeScript without React, you can extend from `pjchender/typescript`. This only setup the config for TypeScript files without `.jsx` or `.tsx`.

For example,

```jsonc
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": ["jest"]
  },
  "include": ["src/**/*", "tests/**/*", ".eslintrc.js", "jest.config.js", "commitlint.config.js"],
  "exclude": ["node_modules", "build", "scripts"]
}
```

Then use this file as the `parseOptions.project`:

```jsonc
// .eslintrc
{
  "extends": ["pjchender/typescript"],
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  }
}
```

If you want to use import alias in your project, you can use `babel-module` to do this by yourself. For example,

```js
const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
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
```

### Prettier

Setup prettier config:

```jsonc
// .prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true, // required
  "singleQuote": true, // required
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```

## Development

Write files in the `tests` folder and see whether ESLint works as expected:

```bash
npm run lint:test
npm run lint:test -- --fix
```

## Inspired By

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint-config-welly](https://github.com/wellyshen/eslint-config-welly)
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
