// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ8oUAutO4fWgP3m8zOwDU01AJH0y26bI",
  authDomain: "duriandb.firebaseapp.com",
  databaseURL: "https://duriandb-default-rtdb.firebaseio.com",
  projectId: "duriandb",
  storageBucket: "duriandb.appspot.com",
  messagingSenderId: "182817181684",
  appId: "1:182817181684:web:02fc7a5a16d9e9ebd173a1",
  measurementId: "G-Z4P58Y05SY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// const analytics = getAnalytics(app);