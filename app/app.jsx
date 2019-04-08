var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoAPI = require('TodoAPI');

var actions = require('actions');
var store = require('configureStore').configure();

import Login from 'Login';
import TodoApp from 'TodoApp';

// Redux store subscription to monitor when our React app's redux state store gets updated. (NOT USED WITH FIREBASE)
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New State', state);
//   TodoAPI.setTodos(state.todos);
// });

// Use local storage internal API to get our saved initial todos to dispatch into the redux store. (NOT USED WITH FIREBASE)
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// Asynchronous action that fetches data from firebase and calls addTodos to update redux store and re-render app.
store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // Provider allows all project components to access the global redux store and dispatch actions.
  <Provider store = {store}>
    <Router history={hashHistory} >
      <Route path="/">
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
