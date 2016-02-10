/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

if('querySelector' in document && 'classList' in document.createElement('a') && 'addEventListener' in window) {

  /**
   * Add class "js" to html element
   */
  document.querySelector('html').classList.add('js');

  /**
   * Add line numbers to <pre>
   */
  function numberedLines() {
    var pre = document.querySelectorAll('pre'),
        pl = pre.length;

    for (var i = 0; i < pl; i++) {
      pre[i].insertAdjacentHTML('beforeend', '<span class="ln" aria-hidden="true"></span>');
      var num = pre[i].innerHTML.split(/\n/).length;

      for (var j = 0; j < num; j++) {
        var lineNum = pre[i].querySelector('.ln');
        lineNum.insertAdjacentHTML('beforeend', '<span></span>');
      }
    }
  }

  numberedLines();

}
