// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.CONN_FIREBASE,
  authDomain: "insta-ddff2.firebaseapp.com",
  projectId: "insta-ddff2",
  storageBucket: "insta-ddff2.appspot.com",
  messagingSenderId: "36316614425",
  appId: "1:36316614425:web:4c07e19e11cebfb1b8bf88",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
