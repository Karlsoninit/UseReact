import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { connect } from 'react-redux';
import { fetchPosts } from './Posts/PostsOperations';
import AddForm from './AddForm/AddForm';
class App extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchPosts();
  }
  state = {};
  render() {
    return (
      <>
        <AddForm />
        <Posts />
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
