import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCFPWgWJW0vSF8ngrudOVHbn0Gz8pDDEX0",
  authDomain: "e-lara-6b5ba.firebaseapp.com",
  databaseURL: "https://e-lara-6b5ba-default-rtdb.firebaseio.com",
  projectId: "e-lara-6b5ba",
  storageBucket: "e-lara-6b5ba.appspot.com",
  messagingSenderId: "819387148894",
  appId: "1:819387148894:web:ad9e827e5148d5751da2cf"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export {firebase};