// Events on submit
$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var formData = $(this).serialize(); // Get the form data as a serialized string
    console.log('Form submitted with data:', formData);
    // Perform AJAX request here to submit form data
  });

  $('input[type="text"]').on('focus', function () {
    console.log('Text input focused');
  });

  $('input[type="checkbox"]').on('change', function () {
    console.log('Checkbox changed:', $(this).prop('checked'));
  });

  $('select').on('change', function () {
    console.log('Select option changed:', $(this).val());
  });

  $('button').on('click', function () {
    console.log('Button clicked');
  });
});