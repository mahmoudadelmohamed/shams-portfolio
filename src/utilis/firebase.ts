import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

export const initFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
  console.log(firebaseConfig, 'FIND_ME');
  
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
