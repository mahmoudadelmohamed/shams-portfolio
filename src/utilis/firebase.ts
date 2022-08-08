import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

export const initFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAhZhzPpyMeMzT3hDJt3ziCdwZ72y3nW_0",
    authDomain: "testing-95f9a.firebaseapp.com",
    databaseURL: "https://testing-95f9a-default-rtdb.firebaseio.com",
    projectId: "testing-95f9a",
    storageBucket: "testing-95f9a.appspot.com",
    messagingSenderId: "943762954382",
    appId: "1:943762954382:web:1a96cb337a98e67923d1df",
    measurementId: "G-VQZWH3SXS3"
  };
  
  initializeApp(firebaseConfig);
}

export const watchDB = (cb: any) => {
  const db = getDatabase();
  const rootRef = ref(db, '/');
  return onValue(rootRef, (snapshot) => {
    let data = snapshot.val();
    cb(data);
  });
}
