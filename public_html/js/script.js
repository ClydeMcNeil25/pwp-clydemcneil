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
  farground.style.top = value * -0.10 + 'px';
  background.style.top = value * -0.15 + 'px';
  midground.style.top = value * -0.20 + 'px';
  foreground.style.top = value * -0.15 + 'px';
});

// For Modals with Video on Hide, video will stop
//Video Production Modals
$('#motionModal1').on('hide.bs.modal', () => {
  $('#myVideo1').attr('src', $('#myVideo1').attr('src'));
});
$('#motionModal2').on('hide.bs.modal', () => {
  $('#myVideo2').attr('src', $('#myVideo2').attr('src'));
});
$('#motionModal3').on('hide.bs.modal', () => {
  $('#myVideo3').attr('src', $('#myVideo3').attr('src'));
});
//Audio Production Modals
$('#audioModal1').on('hide.bs.modal', () => {
  $('#myAudio1').attr('src', $('#myAudio1').attr('src'));
});
$('#audioModal2').on('hide.bs.modal', () => {
  $('#myAudio2').attr('src', $('#myAudio2').attr('src'));
});
$('#audioModal3').on('hide.bs.modal', () => {
  $('#myAudio3').attr('src', $('#myAudio3').attr('src'));
});

// Contact Form
$(document).ready(function(){
  $('#contact').validate({
    debug: true,
    errorClass: 'alert alert-danger',
    ErrorLabelContainer: '#output-area',
    errorElement: 'div',
    // rules to define what good and bad inputs
    // each rule start with the form input element's NAME attribute
    rules: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
      email: {
        email: true,
        required: true
      },
      message: {
        required: true,
        maxlength: 1000
      }
    },
    messages: {
      firstname: {
        required: 'Name is required.'
      },
      lastname: {
        required: 'Name is required.'
      },
      email: {
        email: 'Please provide a valid email.',
        required: 'Email is required.'
      },
      message: {
        required: 'A message is required.',
        maxlength: 'Message must be 1000 characters or less.'
      }
    },
    submitHandler: (form) => {
      $('#contact').ajaxSubmit({
        type: 'POST',
        url: $('contact').attr('action'),
        success: (ajaxOutput) => {
          $('#output-area').css('display', '')
          $('#output-area').html(ajaxOutput)

          if($('.alert-success') >= 1){
            $('#contact')[0].reset()
          }
        }
      })
    }

  })
})