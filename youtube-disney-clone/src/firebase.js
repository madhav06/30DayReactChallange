import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKKoSeONxr52R6THRiGtcqS2XvYRPQcRI",
  authDomain: "disneyplus-clone-bbc5b.firebaseapp.com",
  projectId: "disneyplus-clone-bbc5b",
  storageBucket: "disneyplus-clone-bbc5b.appspot.com",
  messagingSenderId: "825589878903",
  appId: "1:825589878903:web:05c7bd33ab5c18afa9f672",
  measurementId: "G-N4G8VFQC1W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
