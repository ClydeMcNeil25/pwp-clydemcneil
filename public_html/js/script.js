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

// let pause = document.getElementById('myVideo1');
//
// window.addEventListener('click', function(e){
//
// })

// $(document).ready(function(){
//   let url = $("myVideo1").attr('src');
//   $("#motionModal1").on('hide.bs.modal', function() {
//     $("#myVideo1").attr('src', '');
//   });
//   $("#motionModal1").on('show.bs.modal', function() {
//   $("#myVideo1").attr('src', url);
//   });
// });


/* Contact Form */
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