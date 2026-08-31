// src/firebase.js

// Firebase Core
import { initializeApp } from "firebase/app";

// Firebase Analytics
import { getAnalytics } from "firebase/analytics";

// Firebase Authentication
import { getAuth } from "firebase/auth";

// Firebase Realtime Database
import { getDatabase } from "firebase/database";

// Firebase Storage
import { getStorage } from "firebase/storage";


// ================================
// Firebase Configuration
// ================================

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


// ================================
// Initialize Firebase
// ================================

const app = initializeApp(firebaseConfig);


// ================================
// Firebase Services
// ================================

// Admin Authentication
const auth = getAuth(app);

// Realtime Database
const db = getDatabase(app);

// Image/File Storage
const storage = getStorage(app);


// ================================
// Analytics
// ================================

const analytics = getAnalytics(app);


// ================================
// Export
// ================================

export {
  app,
  auth,
  db,
  storage,
  analytics
};