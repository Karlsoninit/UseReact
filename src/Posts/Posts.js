import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { deleteItems } from "../Redux/Action";
import { getPosts, getTag } from "../Select/postSelect";
import { createSelector } from "reselect";
import reRender from "../reRender";
class Posts extends Component {
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   this.props.getPosts;
  // }
  render() {
    const { posts = [], delItems = () => null } = this.props;
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h1>{post.tag}</h1>
            <p>{post.info}</p>
            <button onClick={() => delItems(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

const findTagPosts = createSelector(
  [getPosts, getTag],
  (posts, tag) => posts.filter(elem => elem.tag === tag)
);

// const findTagPosts = state => {
//   const posts = state.posts.post;
//   const tag = state.posts.filter;
//   return posts.filter(elem => elem.tag === tag);
// };

const mapStateToProps = state => ({
  posts: findTagPosts(state)
});

const mapDispatchToProps = dispatch => ({
  delItems: p => dispatch(deleteItems(p))
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Posts);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reRender
)(Posts);
