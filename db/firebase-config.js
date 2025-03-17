// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfZ2_MhgY7BGI3a4kWxbK3f7nZao9CPZQ",
  authDomain: "univer-db730.firebaseapp.com",
  projectId: "univer-db730",
  storageBucket: "univer-db730.appspot.com",
  messagingSenderId: "998859082855",
  appId: "1:998859082855:web:72b3ea4bd8a454c18bd8c2",
  measurementId: "G-GD7EKGR1XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});