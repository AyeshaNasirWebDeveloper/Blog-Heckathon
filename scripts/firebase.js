import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import {

    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    deleteUser,

}
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    Timestamp,
    query,
    orderBy,
    limit,
    doc,
    deleteDoc,
    updateDoc


} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBwiYylL8wtiUxO4NHxUkNrf8jD9K9sPg",
    authDomain: "class-task-11424.firebaseapp.com",
    projectId: "class-task-11424",
    storageBucket: "class-task-11424.firebasestorage.app",
    messagingSenderId: "112860048370",
    appId: "1:112860048370:web:99f69bde9549dfacd1596b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export {
    app, auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, db, getFirestore, collection, addDoc, getDocs,Timestamp, query, orderBy, limit,doc, deleteDoc, signInWithPopup,  GoogleAuthProvider, provider, deleteUser, updateDoc
}
