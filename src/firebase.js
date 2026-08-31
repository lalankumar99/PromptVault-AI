// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj_yw7LEXO8PJN_j6XaV75KoDMXtFZWys",
    authDomain: "promptvault-ai-27fa1.firebaseapp.com",
    databaseURL: "https://promptvault-ai-27fa1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "promptvault-ai-27fa1",
    storageBucket: "promptvault-ai-27fa1.firebasestorage.app",
    messagingSenderId: "813209878907",
    appId: "1:813209878907:web:d87774951b62abcf20bdde",
    measurementId: "G-6410KCJPNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Services
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Export services so they can be imported in index.html, admin.html, and admin-login.html
export { app, analytics, auth, db, storage };
