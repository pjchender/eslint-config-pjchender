# eslint-config-pjchender

## Installation

```bash
# install the eslint-config-pjchender
yarn add -D eslint-config-pjchender

# install the peerDependencies of eslint-config-pjchender
npx install-peerdeps --dev eslint-config-pjchender
```

## Usage

### TypeScript (React)

In default, eslint-plugin-pjchender will use rules for TypeScript files. For preventing the conflict between ESLint and tsconfig, there are two simple ways to solve. Check the FAQs section regarding ["I get errors telling me "ESLint was configured to run ... However, that TSConfig does not / none of those TSConfigs include this file"](https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file) for more details.

#### Exclude unnecessary files from type-aware linting

Use ESLint's overrides configuration to configure the file to not be parsed with type information. For example,

```js
// .eslintrc.cjs
module.exports = {
  // ... the rest of your config ...
  extends: ['pjchender'],
  parserOptions: {
    project: true, // for monorepo, ["./tsconfig.base.json", "./apps/*/tsconfig.json"]
    tsconfigRootDir: __dirname, // "."
  },
  overrides: [
    {
      // highlight-start
      // specify the files that should be has type-aware linting:
      files: ['./src/**/*.{ts,tsx}'],
      // highlight-end
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
};
```

#### Include files with type-aware linting

Create a `tsconfig.eslint.json` file.

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

### Linter for React Testing

If you want to use the ESLint config of [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom) and [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) from the React Testing , you can extend from `pjchender/react-testing`.

For example,

```jsonc
// .eslintrc
{
  "overrides": [
    {
      "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      "extends": ["pjchender/react-testing"]
    }
  ]
}
```

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
    "react/display-name": "off"
  }
}
```

## Inspired By

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint-config-welly](https://github.com/wellyshen/eslint-config-welly)
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
