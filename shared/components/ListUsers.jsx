import React from 'react';

export default class ListUsers extends React.Component {
 
  handleClick = () => {
    console.log('js running');
    this.props.authenticateUser('test@test2.com', 'password');
  }

 render () {
  return (
    <div>
      <h5>Users</h5>
      { JSON.stringify(this.props.users, null, 2) }
      <button onClick={this.handleClick}>ADD DATA</button>
    </div>

  );
 } 
}