/**
 * main.js
 *
 * We keep things simple here on the countryside. No complex
 * module loading or whatever using Browserify or RequireJS.
 * Just one plain, simple vanilla JavaScript file.
 */

'use strict'

// Only run in capable browsers via feature detection
const didCutTheMustard =
  'querySelector' in document &&
  'classList' in document.createElement('a') &&
  'addEventListener' in window &&
  CSS.supports('display', 'flex')

/**
 * Add class "js" to <html>
 */
const jsEnabled = () => {
  document.querySelector('html').classList.add('js')
}

/**
 * Add line numbers to <pre>
 */
const lineNumbers = () => {
  const pre = document.querySelectorAll('pre')
  const pl = pre.length

  for (let i = 0; i < pl; i++) {
    pre[i].insertAdjacentHTML(
      'beforeend',
      '<span class="ln" aria-hidden="true"></span>'
    )
    const num = pre[i].innerHTML.split(/\n/).length

    // Start counter at 1 to circumvent Jekyll adding an extra line in <code>
    for (let j = 1; j < num; j++) {
      const lineNum = pre[i].querySelector('.ln')
      lineNum.insertAdjacentHTML('beforeend', '<span></span>')
    }
  }
}

if (didCutTheMustard) {
  jsEnabled()
  lineNumbers()
}
