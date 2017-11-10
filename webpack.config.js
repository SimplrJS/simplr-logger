module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/simplr-logger.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    externals: {}
};
