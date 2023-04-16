import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDO-rTOm0mDePALBcRDmtc-WA1gwxFBS3E",
  authDomain: "artsby-be647.firebaseapp.com",
  projectId: "artsby-be647",
  storageBucket: "gs://artsby-be647.appspot.com",
  messagingSenderId: "856651793499",
  appId: "1:856651793499:web:ae5041ec067427b3ae2b7e",
  measurementId: "G-76Z2BBYWBS",
  databaseURL: "https://artsby-be647-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
