import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDv_qaUlU-70psisr_lq3UjXg2mSU-5AZg",
  authDomain: "chat-b13e3.firebaseapp.com",
  projectId: "chat-b13e3",
  storageBucket: "chat-b13e3.appspot.com",
  messagingSenderId: "382473244705",
  appId: "1:382473244705:web:b59834a52e3ef4796e1360",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
