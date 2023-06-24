// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsQOEkvuc39G5I5GUyjTU4h-gDRtIA3Dg",
  authDomain: "login-e4efe.firebaseapp.com",
  projectId: "login-e4efe",
  storageBucket: "login-e4efe.appspot.com",
  messagingSenderId: "708759749322",
  appId: "1:708759749322:web:5e95b4f459a23e2c9fea33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);