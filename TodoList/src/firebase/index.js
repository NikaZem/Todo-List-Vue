import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoNVwIJK6ImbL9bKm8J1wfJ62rQmHEe0A",
  authDomain: "mytodolist-2f103.firebaseapp.com",
  projectId: "mytodolist-2f103",
  storageBucket: "mytodolist-2f103.appspot.com",
  messagingSenderId: "663909395939",
  appId: "1:663909395939:web:1d3ad283e2c67a242904d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}