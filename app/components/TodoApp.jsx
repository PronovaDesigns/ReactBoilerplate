var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  // This will not pass the data in the production version of the app.
  // It is a good practice to build apps with static data first.
  getInitialState: function () {
    return {
      showComplete: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: "Walk the dog."
        }, {
          id: 2,
          text: "Take out the trash."
        }, {
          id: 3,
          text: "Cook the goose."
        }, {
          id: 4,
          text: "Chop the chicken."
        }
      ]
    };
  },

  handleAddToDo: function (text) {
    alert('new todo: ' + text);
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
        <TodoList todos={todos} />
        <AddTodo onAddToDo={this.handleAddToDo} />
      </div>
    )
  }
});

module.exports = TodoApp;
