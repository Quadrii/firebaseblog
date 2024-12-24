// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlQsL0j5C-TtR4mO0ZYIPGhokZap3lOM", 
  authDomain: "blog-4b81c.firebaseapp.com",
  projectId: "blog-4b81c",
  storageBucket: "blog-4b81c.firebasestorage.app",
  messagingSenderId: "57177067256",
  appId: "1:57177067256:web:e3c3ae8ac7b6d04648f50d",
  measurementId: "G-XL5G5CDEJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()