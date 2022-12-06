// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhj23L80aS64vMmNVPa69IuslNZnEGyI",
  authDomain: "prg7936-bank.firebaseapp.com",
  projectId: "prg7936-bank",
  storageBucket: "prg7936-bank.appspot.com",
  messagingSenderId: "78643229221",
  appId: "1:78643229221:web:c2abc11f1beb47da7185cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const accountsCollection = collection(db, "bankaccounts");

export const dbQuery = async (field, value) => {
  const q = query(accountsCollection, where(field, "==", value));

  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    results.push(doc.data());
  });

  return results;
};

export const saveBalance = async (doc, newBalance) => {
  const result = await doc.update({ balance: newBalance });
  console.log(result);
}

export const auth = getAuth(app);
export default app;