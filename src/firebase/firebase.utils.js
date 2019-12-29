import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7UiVor5nMzS6GYrf1J-g_Bbmz3JOqABY",
  authDomain: "crwn-db-4d581.firebaseapp.com",
  databaseURL: "https://crwn-db-4d581.firebaseio.com",
  projectId: "crwn-db-4d581",
  storageBucket: "crwn-db-4d581.appspot.com",
  messagingSenderId: "112017722311",
  appId: "1:112017722311:web:7e33476bb072ebb98da7e2",
  measurementId: "G-S4824YMB14"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
