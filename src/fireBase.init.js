// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbQwIbO1HSuRequFspgFcn_eCRQsfn5q0",
  authDomain: "auth-moha-milon-aa47f.firebaseapp.com",
  projectId: "auth-moha-milon-aa47f",
  storageBucket: "auth-moha-milon-aa47f.firebasestorage.app",
  messagingSenderId: "397147983544",
  appId: "1:397147983544:web:417edf196de43e8cf4ae4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);