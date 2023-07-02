import firebase from "firebase/app";
import "firebase/firestore";

// authentication
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjdNnBxIgf2hVpicpeylS0ddSsGnez5DI",
  authDomain: "udemy-vue-firebase-site-6637a.firebaseapp.com",
  projectId: "udemy-vue-firebase-site-6637a",
  storageBucket: "udemy-vue-firebase-site-6637a.appspot.com",
  messagingSenderId: "356099539453",
  appId: "1:356099539453:web:1459c2b29cc728f824d994",
  measurementId: "G-QLYCSG1PRC",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// authentication
const projectAuth = firebase.auth();

const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectAuth, timestamp };
