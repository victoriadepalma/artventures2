import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFD_QWR9bRmNQYOTg8eK6IioxP69b9MnY",
  authDomain: "artventures-50d01.firebaseapp.com",
  projectId: "artventures-50d01",
  storageBucket: "artventures-50d01.appspot.com",
  messagingSenderId: "140758627706",
  appId: "1:140758627706:web:c131ebf2ba839fd44d92c3",
  measurementId: "G-DPEK19KSVK"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const fbStorage= firebase.storage();
const fbFirestore= firebase.firestore();
const timeStamp= firebase.firestore.Fielvalue.servertimestamp
export { app, auth };
export const db = getFirestore(app);
export const store = getStorage(app);
export {fbStorage, fbFirestore, timeStamp }

export const googleProvider = new GoogleAuthProvider();