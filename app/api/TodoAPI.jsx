// This file handles the local storage aspect of the react app
var $ = require('jquery');

module.exports = {

  // Called when we add a new Todo or Toggle
  setTodos: function(todos) {
    if ($.isArray(todos)) {

      // JSON.Stringify converts the todos array into a string.
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;

    }
  },

  // Called when we first start up the app
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {

      // JSON.parse convert a string into an array -- there is a possbility of failure.
      todos = JSON.parse(stringTodos);

    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted -- the built-in "filter" method takes a callback function that gets run by each element in the todo array.
    filteredTodos = filteredTodos.filter( (todo) => {

      // We only want to show todo array elements if they are not completed or the showCompleted checkbox variable is set to true.
      return !todo.completed || showCompleted;

    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter( (todo) => {

      var text = todo.text.toLowerCase();
      
      // indexOf() returns -1 in the case where an element doesn't contain it's argument.
      return searchText.Length === 0 || todo.text.indexOf(searchText) > -1;

    });

    // Sort todos with non-completed first -- use built-in "sort" method (return -1 places the first argument first)
    filteredTodos.sort( (a, b) => {

      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }

    });

    return filteredTodos;

  }
};
