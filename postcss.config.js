/* eslint global-require:0 */

module.exports = {
  map: { inline: true },
  plugins: [
    require('postcss-custom-properties')({
      importFrom: 'src/css/00_variables.css'
    }),
  ]
};
