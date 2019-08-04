import { Type } from '../../Redux/Type';
import { combineReducers } from 'redux';

const PostReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_POSTS_SUCCESS:
      return payload.posts;
    case Type.DELETE_POSTS_SUCCESS:
      return state.filter(post => post.id !== payload.id);
    case Type.ADD_POSTS_SUCCESS:
      return [...state, payload.post];
    default:
      return state;
  }
};
const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.FETCH_POSTS_START:
    case Type.DELETE_POSTS_START:
      return true;
    case Type.FETCH_POSTS_SUCCESS:
    case Type.FETCH_POSTS_ERROR:
    case Type.DELETE_POSTS_SUCCESS:
    case Type.DELETE_POSTS_ERROR:
      return false;
    default:
      return state;
  }
};
const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_POSTS_START:
    case Type.DELETE_POSTS_START:
      return null;
    case Type.FETCH_POSTS_ERROR:
    case Type.DELETE_POSTS_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  items: PostReducer,
  loading: loadingReducer,
  error: errorReducer,
});
