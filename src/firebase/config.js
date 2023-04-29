// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwZlBvDyBvqs-40NDoEmBzfFHjFtEAYOw",
  authDomain: "portfolio-mariano.firebaseapp.com",
  projectId: "portfolio-mariano",
  storageBucket: "portfolio-mariano.appspot.com",
  messagingSenderId: "898118318377",
  appId: "1:898118318377:web:528271942d4a550b8a5f38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();