/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

if('querySelector' in document && 'classList' in document.createElement('a') && 'addEventListener' in window) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

  // Add line numbers to <pre>
  function numberedLines() {
    var pre = document.querySelectorAll('pre'),
        pl = pre.length;

    for (var i = 0; i < pl; i++) {
      pre[i].innerHTML = '<span class="ln" aria-hidden="true"></span>' + pre[i].innerHTML;
      var num = pre[i].innerHTML.split(/\n/).length;

      for (var j = 0; j < num; j++) {
        var line_num = pre[i].querySelector('span');
        line_num.innerHTML += '<span>' + (j + 1) + '</span>';
      }
    }
  }

  numberedLines();

}
