const generalVariables = require ('./config/variables.cjs');
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
      require('stylelint')({fix: true }),
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-mixins'),
      require('postcss-simple-vars')({ variables: generalVariables }),
      require('postcss-nested')
    ]
  }

  module.exports = config
