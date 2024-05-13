// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey : "AIzaSyCj8R0iJmoT-hlfETLGdTYxzk5VUQ9CLBw" , 
  authDomain : "mechatronic-project-af507.firebaseapp.com" , 
  databaseURL : "https://mechatronic-project-af507-default-rtdb.firebaseio.com" , 
  projectId : "mechatronic-project-af507" , 
  storageBucket : "mechatronic-project-af507.appspot.com" , 
  messagingSenderId : "782997268535" , 
  appId : "1:782997268535:web:0f36553a1637a1400977b2" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);