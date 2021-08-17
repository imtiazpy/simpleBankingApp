const email = document.getElementById('email-field');
const password = document.getElementById('password-field');

const loginBtn = document.getElementById('login-btn');


loginBtn.addEventListener('click', function () {
    if (email.value == 'baaperbank@gmail.com' && password.value == 'secret') {
        window.location.href = 'banking.html'
    } else {
        alert("Wrong Email or Password")
    }
})