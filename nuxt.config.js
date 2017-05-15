const TITLE = 'IT Operator';
const DESC = 'IT Operator Console for management of complex IT structures';

module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESC },
      // Twitter
      { name: 'twitter:title', content: TITLE, hid: 'twd' },
      // Google+ / Schema.org
      { itemprop: 'name', content: TITLE, hid: 'gpt' },
      { itemprop: 'description', content: DESC, hid: 'gpd' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#f0ad4e', // orange
    height: '3px'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css'
//    {src: join(__dirname, 'css/app.styl'), lang: 'styl'}
  ],

  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
