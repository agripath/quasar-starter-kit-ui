// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
require('dotenv').config()
const fs = require('fs')
const env = process.env

const path = require('path')

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'registerModelAliases'
    ],

    css: [
      {{#or componentCss directiveCss}}
      'app.sass'
      {{/or}}
    ],

    extras: [
      // 'ionicons-v4',
      'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font' // optional, you are not bound to it
    ],

    framework: {
      iconSet: 'mdi-v5', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: '{{importStrategy}}',

      // Quasar plugins
      plugins: []
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: 'history',

      chainWebpack (chain) {
        chain.resolve.alias.merge({
          'ui': path.resolve(__dirname, '../src/index.js')
        })
      }
    },

    devServer: {
      https: env.SSL_CERT_PATH ? {
        key: fs.readFileSync(env.SSL_KEY_PATH),
        cert: fs.readFileSync(env.SSL_CERT_PATH)
      } : false,
      host: '0.0.0.0',
      port: env.DEV_SERVER_PORT,
      open: false // opens browser window automatically
    },
  }
}
