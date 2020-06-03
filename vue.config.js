const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Timestamp = new Date().getTime(); //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳

module.exports = {
  devServer: {
    port: 8085,
    disableHostCheck: true,
    proxy: {
      '/cgi-bin/': {
        target: 'https://qyapi.weixin.qq.com/',
        ws: false,
        pathRewrite: {
          '^/cgi-bin/': '/cgi-bin/'
        }
      },
      '/inviteapi/': {
        target: 'https://h5uttest2.56pingtai.net/',
        ws: false,
        pathRewrite: {
          '^/inviteapi/': '/inviteapi/'
        }
      }
    }
  },
  css: {
    extract: {
      //打包后的css带版本号，不改变文件名
      // filename: 'css/[name].css?v=' + Timestamp,
      // chunkFilename : 'css/[name].css?v=' + Timestamp
      //打包后的css带版本号,文件名会改变
      filename: 'css/[name].[' + Timestamp + '].css',
      chunkFilename: 'css/[name].[' + Timestamp + '].css'
    }
  },
  configureWebpack: {
    //关闭 webpack 的性能提示
    //       performance: {
    //           hints: false
    //       },
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.时间戳】
      filename: `js/[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`
    },
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false // 去掉注释
          },
          warnings: false,
          compress: {
            drop_console: true,
          }
        },
      }),
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) //忽略 moment 的本地化内容
    ]
  },
  chainWebpack: config => {
    config.module
        .rule("eslint")
        .use("eslint-loader")
        .loader("eslint-loader")
        .tap(options => {
            options.fix = true; //设置自动修复eslint
            return options;
        });
},
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}