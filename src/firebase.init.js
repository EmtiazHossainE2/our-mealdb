// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz8Vk6ihxl59Us1ocF7Kt21LLV_GjqN-g",
    authDomain: "mealdb-auth.firebaseapp.com",
    projectId: "mealdb-auth",
    storageBucket: "mealdb-auth.appspot.com",
    messagingSenderId: "503480034765",
    appId: "1:503480034765:web:864af456f14d80c62e9084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 