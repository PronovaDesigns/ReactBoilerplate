import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({

  // ES6 version of creationg a component function
  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },

  // ES6 version of creationg a component function
  render() {
    return (
      <div>
        <h1 className="page-title">To Do App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with Github account below.
              </p>
              <button className="button" onClick={this.onLogin}>Login With Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
