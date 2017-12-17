/**
 * main.js
 */

'use strict';

// Only run in capable browsers via feature detection
var didCutTheMustard = 'querySelector' in document
  && 'classList' in document.createElement('a')
  && 'addEventListener' in window;

/**
 * Add line numbers to <pre>
 */
function numberedLines() {
  var pre = document.querySelectorAll('pre'),
      pl = pre.length;

  for (var i = 0; i < pl; i++) {
    pre[i].insertAdjacentHTML('beforeend', '<span class="ln" aria-hidden="true"></span>');
    var num = pre[i].innerHTML.split(/\n/).length;

    // Start counter at 1 to circumvent Jekyll adding an extra line in <code>
    for (var j = 1; j < num; j++) {
      var lineNum = pre[i].querySelector('.ln');
      lineNum.insertAdjacentHTML('beforeend', '<span></span>');
    }
  }
}

if (didCutTheMustard) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

  // Add numbered lines to <pre>
  numberedLines();

}
