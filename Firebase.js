// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5c96WVkA8IMaUhp5YTT-Z0vdHMrreP9Y",
  authDomain: "cvbuilder-c187d.firebaseapp.com",
  projectId: "cvbuilder-c187d",
  storageBucket: "cvbuilder-c187d.appspot.com",
  messagingSenderId: "136069770974",
  appId: "1:136069770974:web:019c476cebf1255bc85c4f",
  measurementId: "G-BJG6BJSEFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);