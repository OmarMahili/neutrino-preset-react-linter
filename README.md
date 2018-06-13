[![Build Status](https://travis-ci.org/omarmahili/neutrino-preset-react-linter.svg?branch=master)](https://travis-ci.org/omarmahili/neutrino-preset-react-linter)
[![Neutrino v8.0.0](https://img.shields.io/badge/Neutrino-v8.0.0-blue.svg)](https://shields.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/)
[![NPM downloads](https://img.shields.io/npm/dm/neutrino-preset-react-linter.svg?style=flat)](https://npmjs.com/package/neutrino-preset-react-linter)

# Neutrino React Linter Preset

`neutrino-preset-react-linter` is a Neutrino preset which packages a set of linting rules for React development

## Features

- Ready on the go and extensible linter for React development
- Eslint recommended rules
- Eslint React Plugin (recommended rules on by default)
- Flow Type Plugin (recommended rules on by default)
- Airbnb recommended rules (React and JS)
- [Unpluggable recommended rules](#options)
- Consistent rules among plugins
- ES7 Support

## Requirements

- Yarn or npm client
- Neutrino v8

## Installation

`neutrino-preset-react-linter` can be installed via Yarn or npm:

### Yarn

```
> yarn add --dev neutrino-preset-react-linter
```

### npm

```
> npm install --save-dev neutrino-preset-react-linter
```

## Usage

- Require this package and plug it into Neutrino
- Add an eslintrc configuration file (optional)
- Add a lint script to your package.json (optional)

`neutrino-preset-react-linter` can be consumed from the Neutrino API, middleware or presets.

### Function middleware format

```
const reactLinter = require('neutrino-preset-react-linter');

// neutrino.use(reactLinter) for default options
neutrino.use(reactLinter, options);
```

### Object or array middleware format

```
module.exports = {
    use: [
        // 'neutrino-preset-react-linter' for default options
        ['neutrino-preset-react-linter', options]
    ]
};
```

### Eslint configuration file

```
// .eslintrc.js
const { Neutrino } = require('neutrino');

module.exports = Neutrino()
    .use('.neutrinorc.js')
    .call('eslintrc');
```

### Options

```
const options = {
    test: /\.(js|jsx)$/,
    include: [], /* Should specify either include or exclude */
    exclude: [], /* Should specify either include or exclude */
    eslint: {},
    recommendedRules: {
        // disable react plugin and flowtype plugin recommended rules
        eslintReact: false,
        flowtype: false,
    }
};
```

- `test`: Test which files should be linted.
- `include`: An array of paths to include in linting. Maps to webpack's [`Rule.include`](https://webpack.js.org/configuration/module/#rule-include).
- `exclude`: An array of paths to exclude from linting. Maps to webpack's [`Rule.exclude`](https://webpack.js.org/configuration/module/#rule-exclude).
- `eslint`: An ESLint CLIEngine configuration object for configuring ESLint. Use this to configure rules, plugins, and other [ESLint options](http://eslint.org/docs/user-guide/configuring).
- `recommendedRules`: A configuration object for enabling/disabling recommended rules by this preset
    - `eslint`: A boolean (default `true`).
    - `eslintReact`: A boolean (default `true`).
    - `flowtype`: A boolean (default `true`).
    - `airbnb`: A boolean (default `true`).

### Lint script

Add a lint script to your package.json:

```
{
    "scripts": {
        "lint": "neutrino lint"
    }
}
```

Run it with yarn:

```
> yarn lint
```

or npm:

```
> npm run lint
```


### Default options
```
{
    eslint: {
        baseConfig: {
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:flowtype/recommended',
                'airbnb',
            ],
        },
        plugins: [
            'react',
            'flowtype',
        ],
        parser: 'babel-eslint',
        parserOptions: {
            ecmaVersion: 2017,
            sourceType: 'module',
            ecmaFeatures: {
                modules: true,
                jsx: true,
            },
        },
        rules: {
            indent: [2, 4],
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'flowtype/no-types-missing-file-annotation': 0,
            'flowtype/delimiter-dangle': [2, 'always-multiline'],
            'flowtype/semi': 2,
            'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]*)+$'],
        },
    },
}
```

### Supported Rules

- [`eslint`](https://eslint.org/docs/rules/)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
- [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules)
- [`airbnb-config-eslint`](https://github.com/airbnb/javascript)
