import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBZ8-9lCtqcgdV5TkMZW-4yTry3Aa4d-Dk",
    authDomain: "dependency-users-management.firebaseapp.com",
    databaseURL: "https://dependency-users-management.firebaseio.com",
    projectId: "dependency-users-management",
    storageBucket: "dependency-users-management.appspot.com",
    messagingSenderId: "1036101062414",
    appId: "1:1036101062414:web:822d3c996bec2db2c1915f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();