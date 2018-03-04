const eslint = require('@neutrinojs/eslint');


module.exports = (neutrino, opts = {}) => {
    const extend = (arr1, arr2) => arr1
        .concat(arr2 || [])
        // remove duplicates
        .filter((v, i, a) => a.indexOf(v) === i);

    const defaultOpts = {
        test: neutrino.regexFromExtensions(neutrino.options.extensions),
        eslint: {
            cwd: neutrino.options.root,
            useEslintrc: false,
            root: true,
            extensions: neutrino.options.extensions,
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'airbnb',
            ],
            plugins: [
                'react',
                'flowtype',
            ],
            envs: 'es6',
            parser: 'babel-eslint',
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: 'module',
                ecmaFeatures: {
                    modules: true,
                    jsx: true,
                },
            },
            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: false,
                },
            },
        },
    };

    const options = Object.assign({}, defaultOpts, opts);
    options.eslint.extends = extend(defaultOpts.eslint.extends, (opts.eslint || {}).extends);
    options.eslint.plugins = extend(defaultOpts.eslint.plugins, (opts.eslint || {}).plugins);

    neutrino.use(eslint, options);
};
