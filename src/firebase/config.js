import app from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8mgGjAO70UF1YgIwxMpF8gkw0Nb_8Po4",
    authDomain: "job-listing-fe95f.firebaseapp.com",
    projectId: "job-listing-fe95f",
    storageBucket: "job-listing-fe95f.appspot.com",
    messagingSenderId: "864123008771",
    appId: "1:864123008771:web:20fdd62f3293a0a0b79b36",
  };
  
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  
  export { firebase, firestore, app };