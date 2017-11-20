var path = require("path");

module.exports = {
    entry: {
        "simplr-logger": "./src/index.ts"
    },
    output: {
        filename: "./dist/[name].js",
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
        extensions: [".ts"],
        alias: {
            "simplr-logger": path.resolve(__dirname, "./src/index.ts")
        }
    },
    externals: {
        "tslib": "commonjs tslib"
    }
};
