
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBDSs9-8Zd_bo0FAcZV7lZdaTdIhp5stBc",
  authDomain: "animals-app-403809.firebaseapp.com",
  databaseURL: "https://animals-app-403809-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "animals-app-403809",
  storageBucket: "animals-app-403809.appspot.com",
  messagingSenderId: "77387627356",
  appId: "1:77387627356:web:093cf25b0478ce108c5f99",
  measurementId: "G-DGXZ1WT3EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage();