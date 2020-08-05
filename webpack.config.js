const path = require('path');
const { SymbolDisplayPartKind } = require('typescript');

module.exports = env => {
    const outputPath = env && env.INSTALL
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
            ]
        },
        devtool: 'inline-source-map'
    }
};
