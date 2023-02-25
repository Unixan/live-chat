import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_iUA5t9P8OEStJ2_zIDrYYLzmdM9KWwI",
  authDomain: "tutorial-firebase-projec-8651d.firebaseapp.com",
  projectId: "tutorial-firebase-projec-8651d",
  storageBucket: "tutorial-firebase-projec-8651d.appspot.com",
  messagingSenderId: "499469792980",
  appId: "1:499469792980:web:73ac7e9eb8b04923856d41",
};

// init firebase

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
