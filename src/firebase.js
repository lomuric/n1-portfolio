import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBGoT38OhMdDx7-Tk8-F_77EoE8_MlnL0A",
  authDomain: "react-portfolio-website-4d803.firebaseapp.com",
  projectId: "react-portfolio-website-4d803",
  storageBucket: "react-portfolio-website-4d803.appspot.com",
  messagingSenderId: "1066443920628",
  appId: "1:1066443920628:web:8a1cd7dfcf5d0d4f8afaa1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider)