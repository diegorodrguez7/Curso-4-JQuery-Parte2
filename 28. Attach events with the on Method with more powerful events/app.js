// 
$(document).ready(function () {
  // Attach click event to all p elements
  $('p').on('click', function () {
    console.log('Paragraph clicked:', $(this).text());
  });

  // Attach hover event to all button elements
  $('button').on({
    mouseenter: function () {
      $(this).addClass('hover');
    },
    mouseleave: function () {
      $(this).removeClass('hover');
    },
    click: function () {
      console.log('Button clicked:', $(this).text());
    }
  });

  // Attach submit event to form element
  $('form').on('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var formData = $(this).serialize(); // Get the form data as a serialized string
    console.log('Form submitted with data:', formData);
    // Perform AJAX request here to submit form data
  });

  // Attach resize event to window element
  $(window).on('resize', function () {
    console.log('Window resized:', $(this).width(), $(this).height());
  });

  // Attach keydown event to document element
  $(document).on('keydown', function (event) {
    console.log('Keydown event:', event.which, event.key, event.ctrlKey);
  });
});