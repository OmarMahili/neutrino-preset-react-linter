[![Build Status](https://travis-ci.org/OmarMahili/neutrino-preset-react-linter.svg?branch=master)](https://travis-ci.org/OmarMahili/neutrino-preset-react-linter)
[![Generic badge](https://img.shields.io/badge/Neutrino-v8.0.0-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/)

# Neutrino React Linter Preset

`neutrino-preset-react-linter` is a Neutrino preset which packages a set of linting rules for React development

## Features

- Ready on the go and extensible linter for React development
- Eslint recommended linting rules
- Eslint React Plugin recommended linting rules
- Flow Type Plugin recommended linting rules
- Airbnb linting rules for React
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

`neutrino-preset-react-linter` can be consumed from the Neutrino API, middleware or presets. Require this package and plug it into Neutrino.

###  Function middleware format

```
const reactLinter = require('neutrino-preset-react-linter');

// neutrino.use(reactLinter) for default options
neutrino.use(reactLinter, options);
```
###  Object or array middleware format

```
module.exports = {
    use: [
        // 'neutrino-preset-react-linter' for default options
        ['neutrino-preset-react-linter', options]
    ]
};
```


### Options

```
const options = {
    test: /\.(js|jsx)$/,
    include: [], /* Should specify either include or exclude */
    exclude: [], /* Should specify either include or exclude */
    eslint: {}
};
```

- `test`: Test which files should be linted.
- `include`: An array of paths to include in linting. Maps to webpack's [`Rule.include`](https://webpack.js.org/configuration/module/#rule-include)
- `exclude`: An array of paths to exclude from linting. Maps to webpack's [`Rule.exclude`](https://webpack.js.org/configuration/module/#rule-exclude)
- `eslint`: An ESLint CLIEngine configuration object for configuring ESLint. Use this to configure rules, plugins, and other [ESLint options](http://eslint.org/docs/user-guide/configuring).

All the options passed will override the default options except for `eslint.extends` and `eslint.plugins` which will extend them.

### Default Options
```
{
    test: neutrino.regexFromExtensions(neutrino.options.extensions),
    eslint: {
        cwd: neutrino.options.root,
        useEslintrc: false,
        root: true,
        extensions: neutrino.options.extensions,
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'airbnb'
        ],
        plugins: [
            'react',
            'flowtype'
        ],
        envs: 'es6',
        parser: 'babel-eslint',
        parserOptions: {
            ecmaVersion: 2017,
            sourceType: 'module',
            ecmaFeatures: {
                modules: true,
                jsx: true
            }
        },
        settings: {
            flowtype: {
                onlyFilesWithFlowAnnotation: false
            }
        }
    }
}
```

### Supported Rules

- [`eslint`](https://eslint.org/docs/rules/)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
- [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules)
- [`airbnb-config-eslint`](https://github.com/airbnb/javascript)
