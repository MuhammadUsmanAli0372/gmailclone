// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvv5Ls6qxa9_LlnTON0KzN66azEzn6ft8",
    authDomain: "clone-4f9a4.firebaseapp.com",
    projectId: "clone-4f9a4",
    storageBucket: "clone-4f9a4.appspot.com",
    messagingSenderId: "698731700312",
    appId: "1:698731700312:web:305d5e5916cd32ca0aaa2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }