# eslint-config-pjchender

## install

```bash
# install the eslint-config-pjchender
npm install --save-dev eslint-config-pjchender

# install the peerDependencies of eslint-config-pjchender
npx install-peerdeps --dev eslint-config-pjchender
```

## Usage

Extends the config with the `extends` field in eslint config:

```jsonc
// .eslintrc
{
  // default will use rules included for TS files
  "extends": ["pjchender"]

  // if you only need JavaScript and React related rules
  "extends": ["pjchender/react"]
}
```

## Development

Write files in the `tests` folder and see whether ESLint works as expected:

```bash
npm run test
npm run test -- --fix
```

## Inspired By

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint-config-welly](https://github.com/wellyshen/eslint-config-welly)
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
