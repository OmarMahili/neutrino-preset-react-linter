const eslint = require('@neutrinojs/eslint');

module.exports = (neutrino, opts = {}) => {
    const mappedConfig = {
        eslint: 'eslint:recommended',
        eslintReact: 'plugin:react/recommended',
        flowtype: 'plugin:flowtype/recommended',
        airbnb: 'airbnb',
    };

    const mappedRules = {
        eslint: {
            indent: [2, 4],
        },
        eslintReact: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
        },
        flowtype: {
            'flowtype/no-types-missing-file-annotation': 0,
            'flowtype/delimiter-dangle': [2, 'always-multiline'],
            'flowtype/semi': 2,
            'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]*)+$'],
        },
        airbnb: {},
    };

    const keys = Object.keys(mappedConfig);
    const recommendedRules = opts.recommendedRules || {};

    const baseConfigExtends = [];
    let rules = {};

    for (const key of keys) {
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(recommendedRules, key);
        // if it's explicitly enabled or by default
        if (recommendedRules[key] === true || !hasOwnProperty) {
            baseConfigExtends.push(mappedConfig[key]);
            rules = Object.assign(rules, mappedRules[key]);
        }
    }

    const defaultOpts = {
        eslint: {
            baseConfig: {
                extends: baseConfigExtends,
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
            rules,
        },
    };

    // remove 'recommendedRules', it's peculiar to this package
    const finalOpts = opts;
    delete finalOpts.recommendedRules;

    neutrino.use(eslint, eslint.merge(defaultOpts, finalOpts));
};
