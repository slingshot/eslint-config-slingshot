# eslint-config-slingshot

Slingshot's ESLint rules. Based
on [Airbnb's ESLint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The easiest way to install this package is through `npx install-peerdeps`, which will install all the peer dependencies
for you using your preferred package manager.

```bash
npx install-peerdeps --dev @ssh/eslint-config
```

Then, add the following to your `.eslintrc` file:

```json
{
    "extends": "@ssh"
}
```

If you don't need React-specific rules:

```json
{
    "extends": "@ssh/eslint-config/base"
}
```
