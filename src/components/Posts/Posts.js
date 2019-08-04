import React from 'react';
import { connect } from 'react-redux';
import { deletePosts } from '../Posts/PostsOperations';
const Posts = ({ post = [], handleDelete = () => null }) =>
  post.map(({ id, info, tag }) => (
    <li key={id}>
      <h1>{tag}</h1>
      <p>{info}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  ));

const findFOrTag = state => {
  const post = state.items.posts;
  console.log(post);
  const value = state.value;
  console.log(value);

  console.log(post.find(elem => elem.tag.includes(value)));
  // return post.find(elem => elem.tag.includes(value));
};

const mapStateToProps = state => ({
  post: state.posts.items,
});

const mapDispatchToProps = {
  handleDelete: deletePosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
