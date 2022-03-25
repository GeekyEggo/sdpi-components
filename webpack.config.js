const path = require('path');

module.exports = env => {
    const isLocal = env && env.local;

    const outputPath = isLocal
        ? path.resolve('C:\\git\\GoveeController\\src\\GoveeController\\pi\\js')
        : path.resolve(__dirname, 'dist');

    return {
        entry: './src/index.ts',
        output: {
            filename: 'sdpi.js',
            path: outputPath,
        },
        mode: isLocal ? 'development' : 'production',
        devtool: isLocal ? 'inline-source-map' : 'hidden-source-map',
        resolve: {
            extensions: ['.ts']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    }
};
