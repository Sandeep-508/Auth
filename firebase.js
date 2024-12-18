// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrgmnxhCWalqosd0GubRJUK3SNKOn8l8M",
    authDomain: "authentication-409fb.firebaseapp.com",
    projectId: "authentication-409fb",
    storageBucket: "authentication-409fb.firebasestorage.app",
    messagingSenderId: "1057414264679",
    appId: "1:1057414264679:web:738399fe4e618b0ef061c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);