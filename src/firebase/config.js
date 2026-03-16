import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔧 REPLACE these values with your Firebase project config
// Get them from: Firebase Console → Project Settings → Your Apps → Web App
const firebaseConfig = {
  apiKey: "AIzaSyAHUiGBuUJw9kM0inK-2HKdDYBc-ohIFM8",
  authDomain: "moa-tracker-7add1.firebaseapp.com",
  projectId: "moa-tracker-7add1",
  storageBucket: "moa-tracker-7add1.firebasestorage.ap",
  messagingSenderId: "709390294566",
  appId: "1:709390294566:web:eb7089ea9c01c2f18990e7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
