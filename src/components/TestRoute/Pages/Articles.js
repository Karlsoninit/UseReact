/*eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from '../ArticleList';

class Articles extends Component {
  state = {
    data: [],
    search: 'U',
  };

  componentDidMount() {
    this.searchForm();
  }

  searchForm() {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${this.state.search}`)
      .then(data => this.setState({ data: data.data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.searchForm(this.state.search);
    }
  }

  handleGetInfo = e => {
    this.setState({ search: e.target.value });
    // console.log(this.state.search);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    const { data } = this.state;
    const { onBack } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Articles pages</p>
          <input onChange={this.handleGetInfo} type="text" />
          <ArticleList info={data} />
        </form>
      </>
    );
  }
}

export default Articles;
