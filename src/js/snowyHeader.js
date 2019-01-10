/**
 * Add a little christmas spirit
 */
function letItSnow() {
  var headElem = document.querySelector('head');
  var snowStyles = '<link rel="stylesheet" href="//frippz-se.s3.amazonaws.com/snow.css">';
  var header = document.querySelector('#header');

  headElem.insertAdjacentHTML('beforeend', snowStyles);
  header.classList.add('snow');
}

var derp;

(function () {
  var date = new Date();
  var month = date.getMonth();

  // In this weird world, it only snows in December
  if (month === 11) {
    letItSnow();
  }
})();
