/*module.exports = {
    use: [
        ['@neutrinojs/airbnb-base', {
            eslint: {
                env: ['mocha'],
                rules: {
                    indent: [2, 4],
                },
            },
        }],
        ['@neutrinojs/library', {
            name: 'neutrino-preset-react-linter',
            target: 'node',
        }],
        '@neutrinojs/mocha',
    ],
};*/

const reactLinter = require('@neutrinojs/airbnb-base');

// neutrino.use(reactLinter) for default options
neutrino.use(reactLinter, options);

module.exports = neutrino;
