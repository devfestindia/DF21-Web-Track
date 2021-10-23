// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "### FIREBASE API KEY ###",
  authDomain: "### FIREBASE AUTH DOMAIN ###",
  projectId: "### FIREBASE PROJECT ID ###",
  storageBucket: "### FIREBASE STORAGE BUCKET ###",
  messagingSenderId: "10728XXXXXXXXXX",
  appId: "1:10728XXXXXXXXXX:web:c22f0b8XXXXXXXXXXXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUzvScYgYk4bAzwJNmKGUli14Shuj_JE",
  authDomain: "psychic-glider-323209.firebaseapp.com",
  projectId: "psychic-glider-323209",
  storageBucket: "psychic-glider-323209.appspot.com",
  messagingSenderId: "831157534955",
  appId: "1:831157534955:web:06cfbddde36ca27ba13eae",
  measurementId: "G-9716K52DDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
