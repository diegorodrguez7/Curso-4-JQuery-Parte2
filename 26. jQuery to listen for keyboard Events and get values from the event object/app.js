// 26. jQuery to listen for keyboard Events and get values from the event object

$(document).ready(function () {
  $(document).on('keydown', function (event) {
    console.log('Keydown event:', event.which, event.key, event.ctrlKey);
  });

  $(document).on('keyup', function (event) {
    console.log('Keyup event:', event.which, event.key, event.ctrlKey);
  });

  $(document).on('keypress', function (event) {
    console.log('Keypress event:', event.which, event.key, event.ctrlKey);
  });
});
