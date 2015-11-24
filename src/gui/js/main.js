/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

if('querySelector' in document && 'classList' in document.createElement('a') && 'addEventListener' in window) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

}
