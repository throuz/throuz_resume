module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/throuz_resume/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          silenceDeprecations: ['legacy-js-api']
        }
      }
    }
  }
}