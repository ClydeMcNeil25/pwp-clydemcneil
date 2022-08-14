//
// autoPlayYouTubeModal();
// //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
// function autoPlayYouTubeModal() {
//   let trigger = document.find.id('#motionLabel1');
//   trigger.click(function () {
//     let theModal = $(this).data("target"),
//       videoSRC = $(this).attr("data-theVideo"),
//       videoSRCauto = videoSRC + "?autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal + ' button.close').click(function () {
//       $(theModal + ' iframe').attr('src', videoSRC);
//     });
//   });
// }

//Parallax Effect
let foreground = document.getElementById('foreground');
let midground = document.getElementById('midground');
let background = document.getElementById('background');
let welcome = document.getElementById('welcome');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  welcome.style.top = value * 0.5 + 'px';
  midground.style.top = value * 0.25 + 'px';
  foreground.style.top = value * -0.15 + 'px';
})