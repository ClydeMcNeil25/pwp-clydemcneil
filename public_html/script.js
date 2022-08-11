
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
const images = document.querySelectorAll('.images img');

window.addEventListener('scroll', () => {
  images[0].style.top = "-" + (window.scrollY / 2.5) + "px";
  images[1].style.top = "-" + (window.scrollY / 3.5) + "px";
  images[2].style.top = "-" + (window.scrollY / 4) + "px";
  images[3].style.top = "-" + (window.scrollY / 5) + "px";
  images[4].style.top = "-" + (window.scrollY / 6) + "px";
  images[5].style.top = "-" + (window.scrollY / 7) + "px";
  images[6].style.top = "-" + (window.scrollY / 9) + "px";
});