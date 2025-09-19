import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-90e46.firebaseapp.com",
  projectId: "loginonecart-90e46",
  storageBucket: "loginonecart-90e46.firebasestorage.app",
  messagingSenderId: "376811890738",
  appId: "1:376811890738:web:66984e6d9264acac47342b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};