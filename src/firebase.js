import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnUO3SNidtLh-s5fHckdaHmL0lxRLE9BU",
  authDomain: "finder-82b37.firebaseapp.com",
  projectId: "finder-82b37",
  storageBucket: "finder-82b37.appspot.com",
  messagingSenderId: "1058879267203",
  appId: "1:1058879267203:web:b81342174aa45d49a316b6",
  measurementId: "G-RPT44FXWNJ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
