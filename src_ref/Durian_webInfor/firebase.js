// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5aLeFqHAKWJLAEa8EAKxM-Fx4PlvsyOw",
  authDomain: "testappp-524b6.firebaseapp.com",
  projectId: "testappp-524b6",
  storageBucket: "testappp-524b6.appspot.com",
  messagingSenderId: "54735899443",
  appId: "1:54735899443:web:f7b9e5579f40a765254c46",
  measurementId: "G-PPPXKFSM3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);