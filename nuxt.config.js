
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true, // 表示开启代理
    // prefix: '/api', // 表示给请求url加个前缀 /api
    // credentials: true, // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api/': {
      target: 'https://www.iduilv.com/api', // 目标接口域名
      changeOrigin: true, // 表示是否跨域 
      pathRewrite: {
        '^/api': '', // 把 '/api' 替换成 ''
      },
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = '#source-map' // 添加此行代码
        // 表示在开发模式的 client 端启用 source-map
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: '2700'
  }
}