var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    var todoItem = this.refs.task.value;

    if (todoItem.length > 0) {
      this.refs.task.value = "";
      this.props.onAddToDo(todoItem);
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

module.exports = AddTodo;
