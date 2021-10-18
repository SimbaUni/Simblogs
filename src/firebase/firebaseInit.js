import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4Pj2c8VZ5Mx1MKEs8QGv_JIfnarTeHY4",
    authDomain: "simblogs-2cac2.firebaseapp.com",
    projectId: "simblogs-2cac2",
    storageBucket: "simblogs-2cac2.appspot.com",
    messagingSenderId: "340765239284",
    appId: "1:340765239284:web:7cde51bab8314b0dcbfba1",
    measurementId: "G-HL3N78Q3SS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
  