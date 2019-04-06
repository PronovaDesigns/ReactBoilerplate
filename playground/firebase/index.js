import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

// Using .set to create initial data.
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Chris',
    age: 30
  },
  todos: {
    '123bacds': {
      text: 'Film some vids'
    }
  }
});

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// todosRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// todosRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newTodosRef = todosRef.push({
//   text: 'Kick the chicken'
// });
//
// var newTodosRef = todosRef.push({
//   text: 'Lose the goose'
// });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo is id', newNoteRef.key);


// Fetching (querying) data
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got App object from database.', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// Subscription Listener Approach
// var logDataCallback = (snapshot) => {
//   console.log('User Ref Changed', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logDataCallback);
//
// firebaseRef.child('user').update({
//   name: 'Big Al'
// });
//
// firebaseRef.child('app').update({
//   name: 'Something Else App'
// });

// Turns off Subscription Listener
// firebaseRef.off();


// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// Delete with Child
// firebaseRef.child('app/name').remove();

// Delete with update and setting the value of desired deletion object property to null.
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application Test Multi',
//   'user/name': 'Chris Multi'
// }).then(() => {
//   console.log('Update worked.');
// }, (e) => {
//   console.log('Update Failed.');
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application Test Child'
// }).then(() => {
//   console.log('Update worked.');
// }, (e) => {
//   console.log('Update Failed.');
// });
//
// firebaseRef.child('user').update({
//   name: 'Chris Child'
// }).then(() => {
//   console.log('Update worked.');
// }, (e) => {
//   console.log('Update Failed.');
// });
