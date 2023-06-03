/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-mixins'),
      require('postcss-nested')
    ]
  }
  
  module.exports = config