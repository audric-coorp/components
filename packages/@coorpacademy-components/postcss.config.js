module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-modules-values-replace')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions']
    })
  ]
};
