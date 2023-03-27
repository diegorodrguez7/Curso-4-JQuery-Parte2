// Scroll events

$(document).ready(function () {
  // Attach scroll event to window element
  $(window).on('scroll', function () {
    console.log('Window scrolled:', $(this).scrollTop());
  });

  // Attach resize event to window element
  $(window).on('resize', function () {
    console.log('Window resized:', $(this).width(), $(this).height());
  });
});