//引入一个包
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中所有的信息都写在module.exports中
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",

  //指定模式
  mode: "production",

  //指定打包文件所在目录
  output: {
    //指定打包后的目录
    path: path.resolve(__dirname, "./dist"),
    //打包后文件的名字
    filename: "bundle.js",
  },

  //指定webpack打包时要使用的模块
  module: {
    //指定loader的规则
    rules: [
      //设置ts文件的处理
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    corejs: "3",
                    //使用corejs方式 "usage"表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      //设置less文件的处理
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: ["last 2 versions"],
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  //配置webpack创建
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  //用来设置引用模块
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
