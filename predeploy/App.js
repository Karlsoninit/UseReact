import React, { Component } from "react";

import Counter from "./Counter/Counter";
import { connect } from "react-redux";

import SelectCustom from "./SelectCustom/SelectCustom";
import Test from "./test";
import { fetchPosts } from "./PostList/PostListAction";
import posts from "./posts.json";
import PostList from "./PostList/PostList";
import FilterPosts from "./PostList/FilterPosts";
class App extends Component {
  componentDidMount() {
    this.props.fetchPost(posts);
  }
  state = {};
  render() {
    return (
      <>
        <Counter />
        <SelectCustom />
        <Test />
        <PostList />
        <FilterPosts />
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchPost: posts => dispatch(fetchPosts(posts))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
