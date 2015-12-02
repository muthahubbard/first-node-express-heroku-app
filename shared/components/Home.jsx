import React from 'react';

import ListUsers from './ListUsers';
import Login from './Login';

import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/UserActions';
import * as LoginAuthActions from '../actions/LoginAuthActions';
import { connect } from 'react-redux';

@connect(state => ({ users: state.users, login: state.login }))

export default class Home extends React.Component {

  static needs = [
    UserActions.getUsers
  ]

  render() {
      
    const {users, login, dispatch } = this.props;  

    return (
    <div>
      <p>home</p>
      <ListUsers users={users}
        {...bindActionCreators(UserActions, dispatch)} />



        <Login login={login} {...bindActionCreators(LoginAuthActions, dispatch)} />

    </div>
    );
  }
}