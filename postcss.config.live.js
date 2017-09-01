/* eslint global-require:0 */

module.exports = {
  map: { inline: false },
  plugins: [
    require('postcss-custom-properties'),
    require('postcss-import'),
    require('cssnano')
  ]
};
