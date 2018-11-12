var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map( (todo) => {
        return (
          // {...todo} is called a spread operator - it takes all attributes on todo and passes it down as a prop.
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
