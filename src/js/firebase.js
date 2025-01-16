// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMGw6A2O1fI4ePzDc7_rJAXRO43zrQOvI",
  authDomain: "portfolio-form-6dd41.firebaseapp.com",
  databaseURL:
    "https://portfolio-form-6dd41-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-form-6dd41",
  storageBucket: "portfolio-form-6dd41.firebasestorage.app",
  messagingSenderId: "288392703529",
  appId: "1:288392703529:web:d1e08ffed3ad4d4870b638",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add this function to test connection
async function testConnection() {
  try {
    const testCollection = collection(db, "test");
    const testDoc = await addDoc(testCollection, {
      test: "Connection successful",
      timestamp: new Date(),
    });
    console.log(
      "Firebase connection successful. Test document written with ID: ",
      testDoc.id
    );
    return true;
  } catch (error) {
    console.error("Firebase connection error: ", error);
    return false;
  }
}

export { db, collection, addDoc, testConnection };
