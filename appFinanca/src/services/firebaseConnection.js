import firebase from 'firebase/app';
import 'firebase/database';

 // Your web app's Firebase configuration
 let firebaseConfig = {
    apiKey: "AIzaSyDLen4SOtzUhntcS5AXtMc3mAZEFvfEpxQ",
    authDomain: "app18-c0522.firebaseapp.com",
    projectId: "app18-c0522",
    storageBucket: "app18-c0522.appspot.com",
    messagingSenderId: "863032629868",
    appId: "1:863032629868:web:1d145158f4a30be3c6d649"
  };
  // Initialize Firebase

  if(!firebase.apps.length){
    //   Abrir a conexão
  firebase.initializeApp(firebaseConfig);
}

export default firebase;