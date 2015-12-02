import React from 'react';

export default class ReactApp extends React.Component {
  
componentDidMount = () => {
    this.props.history.pushState(null, '/home');
  }

  render() {
    return <div>
      <h1>React Component</h1>
      {this.props.children}
      </div>;
  }
}
