import React, { Component } from "react";
import { connect } from "react-redux";
import CounterContainer from "./Counter/CounterContainer";
import Select from "./CustomSelect/SelectContainer";
import Draw from "./Draw";
import PostChangeSelect from "./Select/PostChangeSelect";
import Posts from "./Posts/Posts";
import PostsJSON from "./Posts.json";

import { getPosts } from "./Redux/Action";
class App extends Component {
  componentDidMount() {
    this.props.getPo(PostsJSON);
  }
  render() {
    return (
      <>
        <Select />
        <CounterContainer />
        <Draw />
        <Posts />
        <PostChangeSelect />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPo: post => dispatch(getPosts(post))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
