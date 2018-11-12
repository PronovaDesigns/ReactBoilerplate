var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  
  // This will not pass the data in the production version of the app.
  // It is a good practice to build apps with static data first.
  getInitialState: function () {
    return {
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

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
