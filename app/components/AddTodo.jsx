var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var todoItem = this.refs.task.value;

    if (todoItem.length > 0) {
      this.refs.task.value = "";

      // this.props.onAddToDo(todoItem); // This is no longer passed down as props.

      dispatch(actions.addTodo(todoItem)); // Instead we replace the props function with the equivlent action dispatch.

    } else {

      this.refs.task.focus();

    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="task" placeholder="Enter New Task"/>
          <button className="button expanded">Submit New Task</button>
        </form>
      </div>
    );
  }
});

// module.exports = AddTodo;
export default connect()(AddTodo);
