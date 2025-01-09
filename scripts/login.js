import { signUp, signIn, forgotPassword } from './firebase.js';
import { signUp, signIn, forgotPassword } from './firebaselogin.js';

// DOM Elements
const signUpForm = document.querySelector('.form-container.sign-up form');
const signInForm = document.querySelector('.form-container.sign-in form');

// Sign-Up Functionality
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = signUpForm.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const result = await signUp(email, password, username);
    alert(result.message);
});

// Sign-In Functionality
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const result = await signIn(email, password);
    alert(result.message);
});

// Forgot Password
const forgotPassLink = document.querySelector('.forgot-pass a');
forgotPassLink.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = prompt('Enter your email for password reset:');
    if (email) {
        const result = await forgotPassword(email);
        alert(result.message);
    }
});
