const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

const username = 'hoidanit@gmail.com';
const password = '123456';

loginBtn.addEventListener('click', () => {
    if (usernameInput.value === username && passwordInput.value === password) {
        alert('Login successful!');
        window.location.href = 'success.html';
    } else {
        alert('Invalid username or password.');
        usernameInput.style.borderColor = 'red';
        passwordInput.style.borderColor = 'red';
    }
})