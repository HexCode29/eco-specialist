// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZDSa2WNfPoM5KZT-qZnkgcLETrlcRYng",
  authDomain: "emsystem-1.firebaseapp.com",
  projectId: "emsystem-1",
  storageBucket: "emsystem-1.firebasestorage.app",
  messagingSenderId: "1064596121266",
  appId: "1:1064596121266:web:fd92cefd54402247700bab"
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