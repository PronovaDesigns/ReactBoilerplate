var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo'

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
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

// Connects the component to global redux store and requests the needed data -- that data is set as a prop for this component.
export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
