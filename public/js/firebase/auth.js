// Initialise Firebase Authentication
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Add Event Listeners to Auth buttons
document.querySelector("#signin-btn").addEventListener("click", signInUser);
document.querySelector("#signout-btn").addEventListener("click", signOutUser);
document.querySelector("#signout-btn").style.display = "none";

// Sign-In User using Firebase Authentication - Popup
function signInUser() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      document.querySelector("#signin-btn").style.display = "none";
      document.querySelector("#signout-btn").style.display = "inline-block";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// Sign-Out User using Firebase Authentication
function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      document.querySelector("#signin-btn").style.display = "inline-block";
      document.querySelector("#signout-btn").style.display = "none";
    })
    .catch((error) => {
      // An error happened.
    });
}
