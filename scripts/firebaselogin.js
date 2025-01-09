// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

// Your web app's Firebase configuration Object
const firebaseConfig = {
  apiKey: "AIzaSyBKUm8JJ3Uy4aVFnEhzywUBo59YNlm4zBk",
  authDomain: "login-form-7c611.firebaseapp.com",
  projectId: "login-form-7c611",
  storageBucket: "login-form-7c611.firebasestorage.app",
  messagingSenderId: "959370193329",
  appId: "1:959370193329:web:4d9156e15e70c8cb85f590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Firebase Authentication Methods
export const signUp = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await user.updateProfile({ displayName: username });
        return { success: true, message: "Sign-Up successful!", user };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return { success: true, message: `Welcome back, ${user.displayName || 'User'}!`, user };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const forgotPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true, message: "Password reset email sent!" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
