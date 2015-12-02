import React from 'react';

export default class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('do authentication');

    const { loginSubmitted } = this.props;

    console.log('REFS - ', this.refs.email.getDOMNode().value)

    loginSubmitted({
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    })
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <p> { JSON.stringify(this.props.login, null, 2) }</p>
      <p>
        <label>Email</label>
        <input type="email" ref="email" required />
      </p>
      <p>
        <label>Password</label>
        <input type="password" ref="password" required />
      </p>
      <p><input type="submit" /></p>
    </form>
  }
}