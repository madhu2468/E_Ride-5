import firebase from "firebase";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBvuEK3jOheJIvZ-_ZoVdqFzHa8yzbO0",
  authDomain: "eride--4.firebaseapp.com",
  projectId: "eride--4",
  storageBucket: "eride--4.appspot.com",
  messagingSenderId: "549545796244",
  appId: "1:549545796244:web:e392c43cc5272310254a81"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
