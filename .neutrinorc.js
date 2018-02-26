module.exports = {
    use: [
        ['@neutrinojs/airbnb-base', {
            eslint: {
                rules: {
                    indent: ["error", 4]
                }
            }
        }],
        ['@neutrinojs/library', {
            name: 'neutrino-preset-react-linter',
            target: 'node'
        }]
    ]
};
