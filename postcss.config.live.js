/* eslint global-require:0 */

module.exports = {
  map: { inline: false },
  plugins: [
    require('postcss-custom-properties')({
      preserve: true,
      importFrom: 'src/css/00_variables.css'
    }),
  ]
};
