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
          text: "Walk the dog."
        }, {
          id: uuid(),
          text: "Take out the trash."
        }, {
          id: uuid(),
          text: "Cook the goose."
        }, {
          id: uuid(),
          text: "Chop the chicken."
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
          text: text
        }
      ]
    });
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
