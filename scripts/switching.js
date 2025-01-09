// DOM Elements
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.link .signup-link');
const signInLink = document.querySelector('.link .signin-link');

// Switch to Sign Up
signUpLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

// Switch to Sign In
signInLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});