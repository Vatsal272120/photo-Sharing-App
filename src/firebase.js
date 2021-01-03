import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPmqIvsajpUlxUmggWdxJKkZc8y0z1xlA",
  authDomain: "facebook-6f498.firebaseapp.com",
  databaseURL: "https://facebook-6f498.firebaseio.com",
  projectId: "facebook-6f498",
  storageBucket: "facebook-6f498.appspot.com",
  messagingSenderId: "11825136717",
  appId: "1:11825136717:web:1f0c7a0e68042f27dbc804",
  measurementId: "G-6R64242151",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
