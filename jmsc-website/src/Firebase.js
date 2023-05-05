// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCyWGAFAQTRsEIgNk-KDz5K1N_ZMdMa93I",
    authDomain: "jmsc-website.firebaseapp.com",
    projectId: "jmsc-website",
    storageBucket: "jmsc-website.appspot.com",
    messagingSenderId: "738678569522",
    appId: "1:738678569522:web:d94d5481dfe30d2b02da2b",
    measurementId: "G-DZ1MXSS7XP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
