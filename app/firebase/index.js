import firebase from 'firebase';

// try block makes sure the firebase only initializes once.
try {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmzyPkMhXV-dl8IFCqD1hGVKHRtptPVgg",
    authDomain: "migliorini-todo-app.firebaseapp.com",
    databaseURL: "https://migliorini-todo-app.firebaseio.com",
    projectId: "migliorini-todo-app",
    storageBucket: "migliorini-todo-app.appspot.com",
    messagingSenderId: "529815903084"
  };

  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
