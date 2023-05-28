# eslint-config-pjchender

## Installation

```bash
# install the eslint-config-pjchender
yarn add -D eslint-config-pjchender

# install the peerDependencies of eslint-config-pjchender
npx install-peerdeps --dev eslint-config-pjchender
```

## Usage

### Setup Configuration of Prettier

Prettier is used for formatting code with eslint, so remember to create a `.prettierrc` in your project before using the eslint config in this project.

Cause we force to use "semicolon" and "single quotes" in the lint, please make sure your prettier configuration should set the `"semi"` and `"singleQuote"` to `true`.

Example prettier configuration file:

```jsonc
// .prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always"
}
```

### TypeScript (React)

In default, eslint-plugin-pjchender will use rules for TypeScript files. For preventing the conflict between ESLint and tsconfig, we recommend to create a `tsconfig.eslint.json` file.

For example, create a `tsconfig.eslint.json` file in your project:

```jsonc
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  // include all files in the project
  "include": ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "next-env.d.ts", ".eslintrc.js"],
  "exclude": ["node_modules", "build", "scripts"]
}
```

Then refer this file in the config of `parseOptions.project` in `.eslintrc`:

```jsonc
// .eslintrc
{
  // default will use rules included for TS files
  // and remember to use parseOptions to refer your tsconfig
  "extends": ["pjchender"],
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  }
}
```

### JavaScript (React)

Extends the config with the `extends` field in eslint config if you only need JavaScript and React related rules:

```jsonc
// .eslintrc
{
  // if you only need JavaScript and React related rules
  "extends": ["pjchender/react"]
}
```

### TypeScript

For projects only use TypeScript without React, you can extend from `pjchender/typescript`. This only setup the config for TypeScript files without `.jsx` or `.tsx`.

For example, create a `tsconfig.eslint.json` file in your project:

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

Then refer this file in the config of `parseOptions.project` in `.eslintrc`:

```jsonc
// .eslintrc
{
  "extends": ["pjchender/typescript"],
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  }
}
```

If you have some config files in the project root which is not need to be linted, you can add them to the `exclude` field in `tsconfig.eslint.json` or in `.eslintignore` file.

## Development and Deployment

Write files in the `tests` folder and see whether ESLint works as expected:

```bash
npm run test
npm run test -- --fix
```

After push to the main branch, the release job will automatically start.

## MISC

### Absolute Imports and Module Path Aliases for TypeScript

If you want to use import alias in your project, you can use `import-resolver-typescript` to do this by yourself. For example,

```jsonc
// .eslintrc
{
  // ...
  "rules": {
    "import/no-unresolved": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "tsconfig.json"
      }
    }
  }
}
```

### xxx should be listed in the project's dependencies, not devDependencies

By default, eslint-config-pjchender does not care about the packages is dependencies or devDependencies in `'**/*.test.ts'`, `'**/*.test.tsx'`, `'**/*.stories.ts'`, `'**/*.stories.tsx'`. However, you might still use some package that should be listed in devDependencies. In this case, you can modify the rule of `import/no-extraneous-dependencies` in eslint config file manually. For example,

```json
{
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "vite.config.ts"
        ]
      }
    ]
  }
}
```

### Personal Preference

```json
{
  "rules": {
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
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "react-refresh/only-export-components": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-bind": "off",
    "react/display-name": "off",
  }
}
```

## Inspired By

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint-config-welly](https://github.com/wellyshen/eslint-config-welly)
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
