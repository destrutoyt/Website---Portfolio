const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submitButton');

console.log('Form Validator initialized');

form.addEventListener("input", function(event) {
    event.preventDefault();
    if (validationTest() == 3) {
        submitButton.classList.remove('disabled');
        submitButton.disabled = false;
    }
    else {
        submitButton.classList.add('disabled');
        submitButton.disabled = true;
    }
});

function validationTest() {
    let userName = document.getElementById('userName');
    let message = document.getElementById('message');
    let emailAddress = document.getElementById('emailAddress').value.trim();
    let emailLabel = document.getElementById('emailAddress');
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|edu)$/;
    let passed = 0;

    if (!isNaN(userName.value)) {
        userName.style.borderColor = 'red';
    }
    else {
        passed += 1;
        userName.style.borderColor = 'lime';
    }
    
    if (!emailRegex.test(emailAddress)) {
        emailLabel.style.borderColor = 'red';
    }
    else {
        passed += 1;
        emailLabel.style.borderColor = 'lime';
    }

    if (message.value.trim().length === 0) {
        message.style.borderColor = 'red';
    }
    else {
        passed += 1;
        message.style.borderColor = 'lime';
    }
    return passed;
}