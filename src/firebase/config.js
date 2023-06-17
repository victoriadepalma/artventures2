import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
export { app, auth };