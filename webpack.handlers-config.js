module.exports = {
    entry: "./src/handlers.ts",
    output: {
        filename: "./dist/simplr-logger-handlers.js",
        libraryTarget: "umd"
    },
    target: "web",
    node: false,
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
    externals: {
        "tslib": "commonjs tslib",
        "fs": "commonjs fs",
        "os": "commonjs os",
        "path": "commonjs path",
        "process": "commonjs process",
        "simplr-logger": "commonjs simplr-logger"
    }
};
