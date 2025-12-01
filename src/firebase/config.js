// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfCABtQZU9kA6d5bU9DWDv09pBC7atOsE",
  authDomain: "eco-specialist-website.firebaseapp.com",
  projectId: "eco-specialist-website",
  storageBucket: "eco-specialist-website.firebasestorage.app",
  messagingSenderId: "1033075365211",
  appId: "1:1033075365211:web:dc571218597baa92b4f67e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;