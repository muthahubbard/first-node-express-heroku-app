import React from 'react';

export default class ReactApp extends React.Component {
  render() {
    return <div>
      <h1>Hello React Component</h1>
        {this.props.children}
      </div>;
  }
}
