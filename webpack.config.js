const path = require('path');

module.exports = env => {
    const isLocal = env && env.LOCAL;

    const outputPath = isLocal
        ? path.resolve(process.env.APPDATA, 'Elgato/StreamDeck/Plugins/com.geekyeggo.sdpi.sdPlugin/pi')
        : path.resolve(__dirname, 'dist')

    return {
        entry: './src/index.ts',
        output: {
            filename: 'sdpi.js',
            path: outputPath,
        },
        resolve: {
            extensions: ['.ts'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        devtool: env && env.INSTALL ? 'inline-source-map' : ''
    }
};
