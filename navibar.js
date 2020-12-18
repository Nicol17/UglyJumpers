$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('navbar').css('background-color', '#FFFFFF');
      } else {
        $('navbar').css('background', 'none');
      }
    });
  });