var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {

  render () {
    var { todos, showCompleted, searchText } = this.props;

    var renderTodos = () => {

      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
        return (
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
};

// Connects the component to global redux store and requests the needed data -- that data is set as a prop for this component.
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
