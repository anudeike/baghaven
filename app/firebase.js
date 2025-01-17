// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  startAt,
  startAfter,
} from "firebase/firestore";
import { env } from "process";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: "bag-haven-qt9s4v.firebaseapp.com",
  projectId: "bag-haven-qt9s4v",
  storageBucket: "bag-haven-qt9s4v.firebasestorage.app",
  messagingSenderId: "899249395637",
  appId: env.FIREBASE_APP_ID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  startAt,
  startAfter,
};