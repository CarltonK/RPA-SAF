function loginHandler() {

    // <!-- LOGIC
    // 1. Click the submit button
    // 2. Get the input from the fields (that is whatever has been filled)


    // 3. Check the values against some sort of a database

    // -->

    // Retrieve the element
    const emailElement = document.getElementById('email');
    const emailValue = emailElement.value;

    const passwordElement = document.getElementById('password');
    const passwordValue = passwordElement.value;

    // IF - Password checker
    const correctPassword = 'PASSWORD';
    let result;
    if (passwordValue == correctPassword) {
        result = 'You have successfully logged in';
    } else {
        result = 'Oops! Wrong password';
    }

    const body = document.querySelector('body');

    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

    body.appendChild(resultElement);


    // TODO: Actual Credentials System
    // 1. Have a list of allowed emails
    // 2. Use for loop in combination with an if to see if the email you provided is available in the array
    // 3. Bonus -> If email provided is not in the list of allowed email, then push it to the array of allowed emails
}