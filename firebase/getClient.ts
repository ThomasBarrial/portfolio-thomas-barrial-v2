/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import 'firebase/compat/firestore';

const firebaseConfig = {
  //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  //   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  //   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'spendcoin-b828d.firebaseapp.com',
  projectId: 'spendcoin-b828d',
  storageBucket: 'spendcoin-b828d.appspot.com',
  messagingSenderId: '133463522741',
  appId: '1:133463522741:web:a3a3930cd3923e2aad6dfc',
  measurementId: 'G-47NT9SEV8T',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default firebase;
