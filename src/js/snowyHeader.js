/**
 * Add a little christmas spirit
 */
(function () {
  var headElem = document.querySelector('head');
  var snowStyles = '<link rel="stylesheet" href="//frippz-se.s3.amazonaws.com/snow.css">';
  var header = document.querySelector('#header');

  headElem.insertAdjacentHTML('beforeend', snowStyles);
  header.classList.add('snow');
})();
