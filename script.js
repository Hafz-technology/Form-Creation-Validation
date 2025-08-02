document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;
    let messages = [];
    if (userName.length < 3) {
        isValid = false;
        messages.push("Username must exceed 2 letters");
        
    };
    if (!(email.includes('@'))  || !(email.includes('.')) ) {
        isValid = false;
        messages.push("Username must include '@' and '.'");
        };
    if (password.length < 8) {
        isValid = false;
        messages.push("password must be at least  8 characters");
        
    };    

    feedbackDiv.








    
  });

});





isValid = true;
messages = ['Ahmed'];
// messages.push('Khalil');
email = 'khalilhafz@gmailcom'
if (!(email.includes('@'))  || !(email.includes('.')) ) {
  isValid = false;
  messages.push("Username must include '@' and '.'");
};
console.log(isValid);
console.log(messages);





