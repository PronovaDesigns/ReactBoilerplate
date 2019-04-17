var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class TodoSearch extends React.Component {
  render () {
    var { dispatch, showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search To Do List" value={searchText}
            onChange={ () => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted}
              onChange={ () => {
                dispatch(actions.toggleShowCompleted());
              }} />
              Show Completed To Do Items
          </label>
        </div>
      </div>
    )
  }
};

// module.exports = TodoSearch;
export default connect (
  // Only need to create arrow function argument when we need to pull state data from the Redux Store.
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
