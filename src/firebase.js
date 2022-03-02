// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ow6-4Cj3I0webb2Fwbwuc5hoj5pXuZU",
  authDomain: "ninja-sneakers.firebaseapp.com",
  projectId: "ninja-sneakers",
  storageBucket: "ninja-sneakers.appspot.com",
  messagingSenderId: "833110537057",
  appId: "1:833110537057:web:4de55c2ee98fae81384b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;