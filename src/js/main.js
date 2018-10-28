/**
 * main.js
 */

'use strict';

/* eslint-disable */

// Only run in capable browsers via feature detection
var didCutTheMustard = 'querySelector' in document
  && 'classList' in document.createElement('a')
  && 'addEventListener' in window;

if (didCutTheMustard) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

  // Init requirejs
  require([
    'numberedLines'
		// 'snowyHeader',
    // 'darkMode'
  ], function(
    numberedLines
		// snowyHeader,
    // darkMode
  ) {});
}
