// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVVC-dvNCZjxU2Ukd5h5AtHoWrMF17kq4",
  authDomain: "ecommerscoder.firebaseapp.com",
  projectId: "ecommerscoder",
  storageBucket: "ecommerscoder.appspot.com",
  messagingSenderId: "818398445260",
  appId: "1:818398445260:web:53bd7774ba661a06540c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* Conectarse al firebase */

const db = getFirestore(app)

export default db