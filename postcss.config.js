/* eslint global-require:0 */

module.exports = {
  map: { inline: true },
  plugins: [
    require('postcss-custom-properties'),
    require('postcss-import')
  ]
};
