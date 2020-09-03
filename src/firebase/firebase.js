//https://medium.com/@thevatsalsaglani/working-with-firebase-real-time-database-using-reactjs-and-uikit-and-launching-to-netlify-ff92419289b2
import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAIeDI1CV6QpQquHb430pc8mvWEZMpVhjM",
  authDomain: "patientmanagementsystem2.firebaseapp.com",
  databaseURL: "https://patientmanagementsystem2.firebaseio.com",
  projectId: "patientmanagementsystem2",
  storageBucket: "patientmanagementsystem2.appspot.com",
  messagingSenderId: "727271838579",
  appId: "1:727271838579:web:83ae04fb4dd5477fb3eb06",
  measurementId: "G-VB7PC5SXDB",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase;
