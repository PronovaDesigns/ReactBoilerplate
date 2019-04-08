import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({

  // getInitialState: function () {
  //   return {
  //     showCompleted: false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //   };
  // },

  // componentDidUpdate: function () {
  //   TodoAPI.setTodos(this.state.todos);
  // },

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

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

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

export default Redux.connect()(TodoApp);
