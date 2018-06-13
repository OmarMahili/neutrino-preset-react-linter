module.exports = {
    use: [
        ['@neutrinojs/airbnb-base', {
            eslint: {
                envs: ['mocha'],
                rules: {
                    indent: [2, 4],
                    // remove ForOfStatement from restricted syntax
                    "no-restricted-syntax": [
                        "error",
                        "ForInStatement",
                        "LabeledStatement",
                        "WithStatement",
                    ],
                },
            },
        }],
        ['@neutrinojs/library', {
            name: 'neutrino-preset-react-linter',
            target: 'node',
        }],
        '@neutrinojs/mocha',
    ],
};
