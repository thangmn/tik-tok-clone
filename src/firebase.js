import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa7iIB9I_MF5bC2ZCKdG3sOhTsr2ISV3w",
  authDomain: "tik-tok-clone-b4f00.firebaseapp.com",
  projectId: "tik-tok-clone-b4f00",
  storageBucket: "tik-tok-clone-b4f00.appspot.com",
  messagingSenderId: "164905673853",
  appId: "1:164905673853:web:467ef4fe61fc22d680fd14",
  measurementId: "G-8B1EYM39BF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db