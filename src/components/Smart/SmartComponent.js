/*eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import FetchList from './FetchList';
class SmartComponent extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get('http://hn.algolia.com/api/v1/search?query=react')
      .then(({ data }) => {
        // console.log(data);
        this.setState({ data: data.hits });
      });
  }

  render() {
    const { data } = this.state;
    return <FetchList data={data} />;
  }
}

export default SmartComponent;
