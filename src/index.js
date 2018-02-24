const eslint = require('@neutrinojs/eslint');


const defaultOptions = {
    extends: [],
    plugins: [],
    rules: {},
};

module.exports = (neutrino, opts = defaultOptions) => {
    const defaultExtendsConfigs = [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
    ];
    const extendsConfigs = defaultExtendsConfigs
        .concat(opts.extends)
        .filter((v, i, a) => a.indexOf(v) === i);

    const defaultRules = {};
    const rules = Object.assign(
        defaultRules,
        opts.rules,
    );

    const defaultPlugins = [
        'react',
        'flowtype',
    ];
    const plugins = defaultPlugins
        .concat(opts.plugins)
        .filter((v, i, a) => a.indexOf(v) === i);

    neutrino.use(eslint, {
        test: neutrino.regexFromExtensions(neutrino.options.extensions),
        include: [],
        exclude: [],
        eslint: {
            cwd: neutrino.options.root,
            useEslintrc: false,
            root: true,
            extensions: neutrino.options.extensions,
            extends: extendsConfigs,
            plugins,
            baseConfig: {},
            envs: [
                'es6',
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
            settings: {
                flowtype: {
                    onlyFilesWithFlowAnnotation: false,
                },
            },
            globals: [],
            rules,
        },
    });
};
