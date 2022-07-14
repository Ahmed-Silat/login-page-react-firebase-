import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbLwy0j4Hteme9tBA_rspqtYhWMAgOaWI",
  authDomain: "signup-login-36fed.firebaseapp.com",
  projectId: "signup-login-36fed",
  storageBucket: "signup-login-36fed.appspot.com",
  messagingSenderId: "430632969060",
  appId: "1:430632969060:web:0e930a47aed38aa23dd071",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function signUp(form) {
  const { email, password } = form;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("Successful!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("Successfully logged in!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

export { signUp, login };