# Neutrino React Linter Preset

`neutrino-preset-react-linter` is a Neutrino preset which packages a set of linting rules for React development

## Features

- Ready on the go and extensible linter for React development
- Eslint recommended linting rules
- Eslint React Plugin recommended linting rules
- Flow Type Plugin recommended linting rules
- Airbnb linting rules for React

## Requirements

- Yarn or npm client
- Neutrino v8

## Installation

`neutrino-preset-react-linter` can be installed via Yarn or npm:

### Yarn

```
> yarn add --dev neutrino neutrino-preset-react-linter
```

### npm

```
> npm install --save-dev neutrino-preset-react-linter
```

## Usage

`neutrino-preset-react-linter` can be consumed from the Neutrino API, middleware, or presets. Require this package and plug it into Neutrino:

```
// Using function middleware format

const reactLinter = require('neutrino-preset-react-linter');

neutrino.use(reactLinter, {
    extends: [],
    plugins: [],
    rules: {}
});
```
```
// Using object or array middleware format

module.exports = {
    use: [
        ['@neutrinojs/compile-loader', {
            extends: [],
            plugins: [],
            rules: {}
        }]
    ]
};
```

- [`extends`](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package) an array of strings: each configuration enables a subset of core rules that report common problems
- [`plugins`](https://eslint.org/docs/user-guide/configuring#configuring-plugins) an array of strings: each plugin exposes additional rules  
- [`rules`](https://github.com/airbnb/javascript) an object: defines a set of rules
    - [eslint rules](https://eslint.org/docs/rules/)
    - [eslint-plugin-react rules](https://eslint.org/docs/rules/)
    - [eslint-plugin-flowtype rules](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules)
    - [airbnb-config-eslint rules](https://github.com/airbnb/javascript)
