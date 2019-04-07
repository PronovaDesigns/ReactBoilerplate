import firebase from 'firebase';

// try block makes sure the firebase only initializes once.
try {

  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
  };

  firebase.initializeApp(config);

} catch (e) {

}

// Interactions with firebase are handled within the actions.jsx file.
// Existing actions are made to function within a new Asynchronous action

export var firebaseRef = firebase.database().ref();
export default firebase;
