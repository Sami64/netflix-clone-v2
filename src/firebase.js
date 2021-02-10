// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBRjDyo5fjqeeVHNTo_koGWGg5sHkZF_qw",
  authDomain: "netflix-sami.firebaseapp.com",
  databaseURL: "https://netflix-sami.firebaseio.com",
  projectId: "netflix-sami",
  storageBucket: "netflix-sami.appspot.com",
  messagingSenderId: "785971570132",
  appId: "1:785971570132:web:7d4089d3ed8869adc56241",
  measurementId: "G-8QRXNE3615",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
