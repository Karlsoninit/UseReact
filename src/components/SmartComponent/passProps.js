/*eslint-disable*/
import React, { Component } from 'react';

const passProps = props => NewComponent => {
  return class PassProps extends Component {
    render() {
      return <NewComponent {...props} {...this.props} />;
    }
  };
};

export default passProps;
