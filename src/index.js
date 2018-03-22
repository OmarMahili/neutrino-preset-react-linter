const eslint = require('@neutrinojs/eslint');

module.exports = (neutrino, opts = {}) => {
    const defaultOpts = {
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
                'flowtype/no-types-missing-file-annotation': 0,
                'flowtype/delimiter-dangle': [2, 'always-multiline'],
                'flowtype/semi': 2,
                'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]*)+$'],
            },
        },
    };

    neutrino.use(eslint, eslint.merge(defaultOpts, opts));
};
