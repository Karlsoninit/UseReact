/*eslint-disable*/
import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';

class ArticlePage extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/name/pa').then(({ data }) => {
      console.log(data);
      this.setState({
        info: data,
      });
    });
  }

  render() {
    return (
      <>
        <p>ArticlePage</p>
        <ArticleList list={this.state.info} />
      </>
    );
  }
}

export default ArticlePage;
