// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhfYekyweKqeSkx4rQSUrEKzimDDVnGTk",
    authDomain: "chatting-ce893.firebaseapp.com",
    databaseURL: "https://chatting-ce893-default-rtdb.firebaseio.com",
    projectId: "chatting-ce893",
    storageBucket: "chatting-ce893.appspot.com",
    messagingSenderId: "647796368440",
    appId: "1:647796368440:web:3eacb11df33b705c0bb2cd",
    measurementId: "G-3XPCV55T19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// export const database = getDatabase();