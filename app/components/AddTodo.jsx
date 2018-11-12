var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    var task = this.refs.task.value;

    if (task.length > 0) {
      this.refs.task.value = "";
      this.props.onAddToDo(task);
    } else {
      this.refs.task.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="task" placeholder="Enter New Task"/>
          <button className="button expanded">Submit New Task</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
