module.exports = {
  devServer: {
    port: 8080,
    open: 'Google Chrome',
    hot: true,
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      importWorkboxFrom: 'local',
      importsDirectory: 'js',
      navigateFallback: '/',
      navigateFallbackBlacklist: [/\/api\//]
    },
    name: "FR Reader"
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    'FR-Reader/' :
    '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '枫瑞阅读'
        return args
      })
  }
}