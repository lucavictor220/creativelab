$(function() {
  setSize();
  $(window).resize(setSize);
  function setSize() {
    var current_height = $(window).height();
    var padding_button = current_height / 100 * 75;
    $('header .intro-text').css("padding-top", padding_button);
  }
  $('#web-task').click(function() {
     window.open("applications/web.html");
  });
  $('#mobile-task').click(function() {
     window.open("applications/mobile.html");
  })
  $('#2d-task').click(function() {
     window.open("applications/2_D.html");
  })
  $('#3d-task').click(function() {
     window.open("applications/3_D.html");
  })
});