import pkg from './package'
import ApiConfig from './config/api'

export default {
  mode: 'universal',
  /**
   * 主机和端口的配置
   *  */
  server: {
    // port: 8088, // default: 3000
  },
  
  /*
  ** Headers of the page
  */
  head: {
    title: "总中心管理系统",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/http'
    {
      src: '@/plugins/http', 
      ssr: false
    },
    // '@/plugins/element-ui'
    {
      src: '@/plugins/element-ui', 
      ssr: false
    },
    // '@/plugins/lodash'
    {
      src: '@/plugins/lodash', 
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: false
  },
   /*
  ** proxy module configuration
  */
  proxy: {
    '/gsafetyclound': {
      target: ApiConfig.apiHost,
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/gsafetyclound': '/gsafetyclound'
      }
    },
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    cache: true,
    parallel: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
