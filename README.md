# eslint-config-slingshot

Slingshot's ESLint rules. Based
on [Airbnb's ESLint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

The easiest way to install this package is through `npx install-peerdeps`, which will install all the peer dependencies
for you using your preferred package manager.

```bash
npx install-peerdeps --dev @ssh/eslint-config
```

Then, add the configuration to your `.eslintrc.json` and set `parserOptions.project`:

```json
{
    "extends": "@ssh",
    "parserOptions": {
        "project": "{{ path to your tsconfig.json }}"
    }
}
```

If you don't need React-specific rules, you can use the `base` configuration instead:

```json
{
    "extends": "@ssh/eslint-config/base",
    "parserOptions": {
        "project": "{{ path to your tsconfig.json }}"
    }
}
```
