var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

  // This will not pass the data in the production version of the app.
  // It is a good practice to build apps with static data first.
  getInitialState: function () {
    return {
      showComplete: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: "Walk the dog.",
          completed: false
        }, {
          id: uuid(),
          text: "Take out the trash.",
          completed: true
        }, {
          id: uuid(),
          text: "Cook the goose.",
          completed: true
        }, {
          id: uuid(),
          text: "Chop the chicken.",
          completed: false
        }
      ]
    };
  },

  handleAddToDo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },

  handleToggle: function (id) {
    // ".map" allows us to iterate through all our todos
    var updatedTodos = this.state.todos.map( (todo) => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({toods: updatedTodos});
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
    })
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddToDo={this.handleAddToDo} />
      </div>
    )
  }
});

module.exports = TodoApp;
