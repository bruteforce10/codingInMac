import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJPnvbh_KMKq6WZy2lSQ12_HBByHIpGaw",
  authDomain: "practicereactjs-e75b5.firebaseapp.com",
  projectId: "practicereactjs-e75b5",
  storageBucket: "practicereactjs-e75b5.appspot.com",
  messagingSenderId: "466033664290",
  appId: "1:466033664290:web:ab4fc1b1893039f189c57b",
  measurementId: "G-NH6CKRPY31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
