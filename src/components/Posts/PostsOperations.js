import axios from 'axios';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  deletePostsStart,
  deletePostsSuccess,
  deletePostsError,
  addPostsStart,
  addPostsSuccess,
  addPostsError,
} from '../../Redux/Action';
//added posts

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsStart());

  axios
    .get('http://localhost:8080/posts')
    .then(response => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchPostsError(error));
    });
};
//delete posts
export const deletePosts = id => dispatch => {
  dispatch(deletePostsStart());

  axios
    .delete(`http://localhost:8080/posts/${id}`)
    .then(response => {
      dispatch(deletePostsSuccess(response.data));
    })
    .catch(error => {
      dispatch(deletePostsError(error));
    });
};
//add posts
export const addPosts = addPost => dispatch => {
  dispatch(addPostsStart());

  axios
    .post('http://localhost:8080/posts/', addPost)
    .then(response => {
      dispatch(addPostsSuccess(response.data));
    })
    .catch(error => {
      dispatch(addPostsError(error));
    });
};
