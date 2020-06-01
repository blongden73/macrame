function nav(){
  var ham = document.querySelector('.m-hamburger');
  var nav = document.querySelector('nav');

  ham.addEventListener('click', function(){
    this.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

function init(){
  nav();
}init();
