import React from 'react';
import axios from 'axios';

class Data extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}
