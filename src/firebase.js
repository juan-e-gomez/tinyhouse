import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSl3Wrwwv7Mf1Um53n3YG3nRn0zIHBTo0",
    authDomain: "tiny-house-pinamar.firebaseapp.com",
    projectId: "tiny-house-pinamar",
    storageBucket: "tiny-house-pinamar.appspot.com",
    messagingSenderId: "227468038248",
    appId: "1:227468038248:web:3fa2e9d022e7d2950f2bdd"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };