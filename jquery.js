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

function loginHandler(email, password) {
    const correctPassword = 'PASSWORD';
    const allowedEmails = ['test@email.com', 'test1@email.com', 'test2@email.com'];

    // Check if email provided is allowed to login
    let result;
    const isEmailAllowed = allowedEmails.includes(email);

    if (isEmailAllowed) {
        // If email is allowed, confirm password is correct
        if (password == correctPassword) {
            result = 'You have successfully logged in';
        } else {
            result = 'Oops! Wrong password';
        }
    } else {
        result = 'Please provide a valid email';
    }
    return result;
}

$(document).ready(function () {
    // Working with FORMS
    $('form#loginForm').submit(function (event) {

        // Retrieve input from fields
        const email = $('input#email').val();
        const password = $('input#password').val();

        const loginResult = loginHandler(email, password);

        $('p#result').text(loginResult);

        event.preventDefault();
    });
});