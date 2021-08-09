import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWsP0zy3MnJSBlu3MF76H6dorBJhpwstY",
  authDomain: "finder-2942f.firebaseapp.com",
  projectId: "finder-2942f",
  storageBucket: "finder-2942f.appspot.com",
  messagingSenderId: "1040831679019",
  appId: "1:1040831679019:web:c51ae20b5cc9018097786e",
  measurementId: "G-Z153VC97JL",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
