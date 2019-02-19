var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },

  // handleAddToDo: function (text) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  // },

  // handleToggle: function (id) {
  //   // ".map" allows us to iterate through all our todos
  //   var updatedTodos = this.state.todos.map( (todo) => {
  //
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //
  //     return todo;
  //   });
  //
  //   this.setState({todos: updatedTodos});
  // },

  // handleSearch: function (showCompleted, searchText) {
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText
  //   })
  // },

  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">To Do App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-5 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
