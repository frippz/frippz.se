/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

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

if ('querySelector' in document && 'classList' in document.createElement('a') && 'addEventListener' in window) {

  /**
   * Add class "js" to html element
   */
  document.querySelector('html').classList.add('js');

  /**
   * Add numbered lines to <pre>
   */
  numberedLines();

}
