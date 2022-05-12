const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            {
                test: /\.woff($|\?)|\.woff2($|\?)/i,
                type: "asset/resource",
                generator: {
                    //filename: 'fonts/[name]-[hash][ext][query]'
                    filename: "fonts/[name][ext][query]",
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        // inject CSS to page
                        loader: "style-loader",
                    },
                    {
                        // translates CSS into CommonJS modules
                        loader: "css-loader",
                    },
                    {
                        // Run postcss actions
                        loader: "postcss-loader",
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [require("autoprefixer")];
                                },
                            },
                        },
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "HW#22: Webpack. Todolist",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    cache: false,
};
