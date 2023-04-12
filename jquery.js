// $('p#pOne').click(function () {
//     $(this).hide();
// });

// Add a CSS element
// $("p#pOne").click(function () {
//     $(this).css('color', 'red');
// }); 

// Add a CSS class
// $("p#pOne").click(function () {
//     $(this).removeClass('styler');
// });

$(document).ready(function () {
    // Working with FORMS
    $('form#loginForm').submit(function (event) {

        // Retrieve input from fields
        const email = $('input#email').val();
        const password = $('input#password').val();

        const correctPassword = 'PASSWORD';
        let result;
        if (password == correctPassword) {
            result = 'You have successfully logged in';
        } else {
            result = 'Oops! Wrong password';
        }

        $('p#result').text(result);

        event.preventDefault();
    });
});