/**
 * main.js
 */

'use strict';

// Only run in capable browsers via feature detection
var didCutTheMustard = 'querySelector' in document
  && 'classList' in document.createElement('a')
  && 'addEventListener' in window;

if (didCutTheMustard) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

  // Add numbered lines to <pre>
  require('./numberedLines');

  // Let it snow!
  // require('./snowyHeader');

}
