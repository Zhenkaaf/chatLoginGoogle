// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQcOoV3yax_V7KI6LLErAWxshsgJOzEHg",
  authDomain: "signin-4bc30.firebaseapp.com",
  projectId: "signin-4bc30",
  storageBucket: "signin-4bc30.appspot.com",
  messagingSenderId: "614762498079",
  appId: "1:614762498079:web:a37924e03139fd2c3c2d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
