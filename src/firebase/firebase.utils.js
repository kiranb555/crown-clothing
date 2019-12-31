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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error, "error creating user");
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
