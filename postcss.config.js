/* eslint global-require:0 */

module.exports = {
  map: { inline: true },
  plugins: [
    require('postcss-custom-properties')({
      preserve: false,
      importFrom: 'src/css/00_variables.css'
    }),
  ]
};
