// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjVtek5AMjv0f1KSYdJaOKXZ6NoGwktpY",
  authDomain: "fir-auth-58a80.firebaseapp.com",
  projectId: "fir-auth-58a80",
  storageBucket: "fir-auth-58a80.appspot.com",
  messagingSenderId: "970602044408",
  appId: "1:970602044408:web:bf374457f41a1969ca540d",
  measurementId: "G-18ST81D1NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

