
autoPlayYouTubeModal();
//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
  let trigger = document.find.id('#motionLabel1');
  trigger.click(function () {
    let theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-theVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
}

//Parallax Effect
let bg = document.getElementsByClassName("background");
let mg = document.getElementsByClassName('midground');
let fg = document.getElementsByClassName('foreground');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  bg.style.top = value * 0.15 + 'px';
  // mg.style.top = value * 0.25 + 'px';
  // fg.style.top = value * 0.5 + 'px';
});