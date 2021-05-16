import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA92BPb41PGIeixCKTxuipX8X8AyGY54DE",
  authDomain: "gasdetect-fe60e.firebaseapp.com",
  databaseURL: "https://gasdetect-fe60e-default-rtdb.firebaseio.com",
  projectId: "gasdetect-fe60e",
  storageBucket: "gasdetect-fe60e.appspot.com",
  messagingSenderId: "907403247116",
  appId: "1:907403247116:web:502ed213c5994405073829",
};
const db = firebase.initializeApp(firebaseConfig).database();
export default db;
