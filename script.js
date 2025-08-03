document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', function(event)  {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;
    let messages = [];
    if (username.length < 3) {
        isValid = false;
        messages.push("Username must exceed 2 letters");
        
    }
    if (!(email.includes('@'))  || !(email.includes('.')) ) {
        isValid = false;
        messages.push("Username must include '@' and '.'");
        }
    if (password.length < 8) {
        isValid = false;
        messages.push("password must be at least  8 characters");
        
    } 

    feedbackDiv.style.display = 'block';
     if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.style.color = "#28a745";
        } else {
            // Join messages with <br> for new lines in the HTML
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.backgroundColor = "#f8d7da";
            feedbackDiv.style.color = "#dc3545";
        }

});
});