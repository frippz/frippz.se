/**
 * Toggle Dark Mode™
 */

'use strict';

/* eslint-disable */

function darkMode() {

  // Cache HTML element
  var rootElem = document.querySelector('html');

  // We have Dark Mode support
  rootElem.classList.add('dark-mode-ready');

  // We’ll put the toggle button in the header
  var headerElem = document.querySelector('#header');

  // Create a toggle button
  var darkModeToggle = document.createElement('button');
  darkModeToggle.innerHTML = 'Toggle Dark Mode™';
  darkModeToggle.setAttribute('data-toggle', 'dark-mode');

  // Insert the button
  headerElem.appendChild(darkModeToggle);

  var getCookie = docCookies.getItem('darkMode');

  if (getCookie === 'true') {
    rootElem.classList.add('dark-mode');
  }

  // Toggle dark mode class & set cookie
  function toggleDarkMode() {
    rootElem.classList.toggle('dark-mode');
    if (rootElem.classList.contains('dark-mode')) {
      docCookies.setItem('darkMode', true, 86400);
    } else {
      docCookies.removeItem('darkMode');
    }
  }

  darkModeToggle.addEventListener('click', toggleDarkMode, false);
}

require(['vendor/docCookies'], function () {
  darkMode();
});
