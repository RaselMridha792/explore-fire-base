// do not store config on client site

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLL_p8VDs0jQCVFtQh7feBHWg3cNAoQdA",
  authDomain: "simple-firebase-project-84780.firebaseapp.com",
  projectId: "simple-firebase-project-84780",
  storageBucket: "simple-firebase-project-84780.firebasestorage.app",
  messagingSenderId: "210536353576",
  appId: "1:210536353576:web:a21bb0ee9ac41d32274a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth