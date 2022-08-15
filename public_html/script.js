//Parallax Effect
let foreground = document.getElementById('foreground');
let midground = document.getElementById('midground');
let background = document.getElementById('background');
let farground = document.getElementById('farground');
let moon = document.getElementById('moon')
let stars = document.getElementById('stars');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  stars.style.left = value * 0.05 + 'px';
  moon.style.left = value * 1.25 + 'px';
  farground.style.top = value * 0.10 + 'px';
  background.style.top = value * 0.15 + 'px';
  midground.style.top = value * 0.20 + 'px';
  foreground.style.top = value * -0.15 + 'px';
});

// let pause = document.getElementById('myVideo1');
//
// window.addEventListener('click', function(e){
//
// })