import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD_0q6dZI8rhuxt3PQ1SBr9irFL4AG_Swo",
  authDomain: "portfolio-dashboard-1b934.firebaseapp.com",
  projectId: "portfolio-dashboard-1b934",
  storageBucket: "portfolio-dashboard-1b934.appspot.com",
  messagingSenderId: "661221011376",
  appId: "1:661221011376:web:6f34bf3c86578eb9857075"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider)