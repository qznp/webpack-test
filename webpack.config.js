const path = require("path");
module.exports = {
  // 入口文件的配置项
  entry: {
    entry: "./src/entry.js",
    entry2: "./src/entry2.js"
  },
  // 出口文件的配置项
  output: {
    // 打包的路径
    path: path.resolve(__dirname, "dist"),
    // 打包的文件名称
    filename: "[name].js"
  },
  // 模块：例如解读css，图片如何转换，压缩
  module: {},
  // 插件，用于生产模板和各项功能
  plugins: [],
  // 配置webpack开发服务功能
  devServer: {
    //   设置基本目录结构
    contentBase: path.resolve(__dirname, "dist"),
    // 服务器的IP地址，可以使用IP地址也可以使用local host
    host: "127.0.0.1",
    // 服务端压缩是否开启
    compress: true,
    // 配置服务器端口
    port: 1717
  }
};