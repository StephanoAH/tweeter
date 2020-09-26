import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGzc96Z9Q-Xhmu4Hqv7TrEf2dQcG0M9RI",
  authDomain: "twitter-clone-3d184.firebaseapp.com",
  databaseURL: "https://twitter-clone-3d184.firebaseio.com",
  projectId: "twitter-clone-3d184",
  storageBucket: "twitter-clone-3d184.appspot.com",
  messagingSenderId: "961003530955",
  appId: "1:961003530955:web:2daeff4a3d2f7e86e8494e",
  measurementId: "G-1FX3EXXBQP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
