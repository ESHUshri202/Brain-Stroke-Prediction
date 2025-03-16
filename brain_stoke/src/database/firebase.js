import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRLEi-mWnyyIN9xgEieAmG92o1TgrWRJY",
  authDomain: "brain-stroke-e52af.firebaseapp.com",
  projectId: "brain-stroke-e52af",
  storageBucket: "brain-stroke-e52af.firebasestorage.app",
  messagingSenderId: "20143233025",
  appId: "1:20143233025:web:b51cf22b54388ea4ec4800",
  measurementId: "G-SDF9XJSDES"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);