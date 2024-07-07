import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBByfqt5L5xazbHNdFA2MmnmCxl3bE58TE",
  authDomain: "diploma-project-a94db.firebaseapp.com",
  projectId: "diploma-project-a94db",
  storageBucket: "diploma-project-a94db.appspot.com",
  messagingSenderId: "909068742705",
  appId: "1:909068742705:web:ffc2cd6a537062bb9c6510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db , provider};