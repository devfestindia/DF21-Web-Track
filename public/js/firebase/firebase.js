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
  apiKey: "AIzaSyAntVwdNXf092sUHxCZ729gDoxqRs4f4cQ",
  authDomain: "firstweb-56447.firebaseapp.com",
  projectId: "firstweb-56447",
  storageBucket: "firstweb-56447.appspot.com",
  messagingSenderId: "512034366767",
  appId: "1:512034366767:web:62bf74197df64a36f3adda",
  measurementId: "G-MW0KG2KQNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
