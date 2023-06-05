// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFPWgWJW0vSF8ngrudOVHbn0Gz8pDDEX0",
  authDomain: "e-lara-6b5ba.firebaseapp.com",
  databaseURL: "https://e-lara-6b5ba-default-rtdb.firebaseio.com",
  projectId: "e-lara-6b5ba",
  storageBucket: "e-lara-6b5ba.appspot.com",
  messagingSenderId: "819387148894",
  appId: "1:819387148894:web:ad9e827e5148d5751da2cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;