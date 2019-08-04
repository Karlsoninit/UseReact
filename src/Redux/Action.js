import { Type } from './Type';

// export const getPosts = state => ({
//   type: Type.FETCH_POSTS,
//   payload: state,
// });

// export const deletePosts = id => ({
//   type: Type.DELETE_ITEMS,
//   payload: id,
// });

// export const findPost = state => ({
//   type: Type.FIND_POSTS,
//   payload: state,
// });

//for redux api fetch

//added posts
export const fetchPostsStart = () => ({
  type: Type.FETCH_POSTS_START,
});
export const fetchPostsSuccess = posts => ({
  type: Type.FETCH_POSTS_SUCCESS,
  payload: {
    posts,
  },
});
export const fetchPostsError = error => ({
  type: Type.FETCH_POSTS_ERROR,
  payload: {
    error,
  },
});

//delete posts
export const deletePostsStart = () => ({
  type: Type.DELETE_POSTS_START,
});
export const deletePostsSuccess = id => ({
  type: Type.DELETE_POSTS_SUCCESS,
  payload: {
    id,
  },
});
export const deletePostsError = error => ({
  type: Type.DELETE_POSTS_ERROR,
  payload: {
    error,
  },
});

//addPosts

export const addPostsStart = () => ({
  type: Type.ADD_POSTS_START,
});
export const addPostsSuccess = post => ({
  type: Type.ADD_POSTS_SUCCESS,
  payload: {
    post,
  },
});
export const addPostsError = error => ({
  type: Type.ADD_POSTS_ERROR,
  payload: {
    error,
  },
});

// export const deletePosts = id => ({
//   type: Type.DELETE_ITEMS,
//   payload: id,
// });

export const findPost = state => ({
  type: Type.FIND_POSTS,
  payload: state,
});
