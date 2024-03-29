module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'webpack'],
        files:[{ pattern: './karma.shim.js', watched: false }],
        exclude: [],
        preprocessors: {
            'karma.shim.js': ['webpack', 'sourcemap']
        },
        webpack: {
            mode: 'development',
            devtool: 'inline-source-map',
            output: {},
            resolve: {
                extensions: ['.ts', '.js']
            },
            module: {
                exprContextCritical: false,
                rules: [
                    {
                        test: /\.ts$/,
                        use: [{
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: './e2e/tsconfig.e2e.json'
                            }
                        }],
                        exclude: [/node_modules/]
                    }
                ]
            }
        },
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true
    });
};
