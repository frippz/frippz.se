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

  /**
   * Toggle dyslexic mode
   */
  function dyslexicMode() {

    // Place button inside role="banner"
    var toggleContainer = document.querySelector('[role="banner"] .landmark-content');

    // Create toggle button
    toggleContainer.insertAdjacentHTML('beforeend', '<button type="button" class="toggle-dyslexic-mode" data-text-original="Enable dyslexic mode" data-text-swap="Disable dyslexic mode">Enable dyslexic mode</button>');

    // Cache button selector
    var dyslexicButton = document.querySelector('.toggle-dyslexic-mode');

    // Function to toggle class and swap text on button
    function toggleDyslexicMode() {
      // Toggle the clas on <body>
      document.body.classList.toggle('dyslexic-mode');

      // Swap text on <button>
      if (dyslexicButton.getAttribute("data-text-swap") == dyslexicButton.innerHTML) {
        dyslexicButton.innerHTML = dyslexicButton.getAttribute("data-text-original");
      } else {
        dyslexicButton.setAttribute("data-text-original", dyslexicButton.innerHTML);
        dyslexicButton.innerHTML = dyslexicButton.getAttribute("data-text-swap");
      }
    }

    // Swap class & text on click
    dyslexicButton.addEventListener("click", toggleDyslexicMode, false);
  }

  dyslexicMode();

}
