function nav(){
  var ham = document.querySelector('.m-hamburger');
  var nav = document.querySelector('nav');
  var logo = document.querySelector('.m-logo');

  ham.addEventListener('click', function(){
    console.log('1.3');
    this.classList.toggle('open');
    nav.classList.toggle('open');
    logo.classList.toggle('open');
  });
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function cards(){
  var cards = document.querySelectorAll('.m-card');
  document.addEventListener('scroll', function(){
    for(i = 0; i < cards.length; i++){
      if(elementInViewport(cards[i])){
        cards[i].classList.add('inview');
      } else {
        cards[i].classList.remove('inview');
      }
    }
  });
}

function init(){
  nav();
  cards();
}init();
