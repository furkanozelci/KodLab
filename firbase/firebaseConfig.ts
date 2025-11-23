// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, Storage } from 'firebase/storage';

// Define Firebase configuration type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3N8fLhzw8BLe_JSqqFiZPDh-BYxT7W2U",
  authDomain: "kodlab-a2350.firebaseapp.com",
  projectId: "kodlab-a2350",
  storageBucket: "kodlab-a2350.firebasestorage.app",
  messagingSenderId: "1086192448670",
  appId: "1:1086192448670:web:ac2d09d0784a1d7199b78f",
  measurementId: "G-RPLD4Q9GVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances with their types
export const db: Firestore = getFirestore(app);
export const storage: Storage = getStorage(app);
