import Type from "../Redux/Type";
import { combineReducers } from "redux";
const PostReducers = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_POSTS:
      return payload;
    case Type.DELETE_ITEMS:
      return state.filter(elem => elem.id !== payload);
    default:
      return state;
  }
};

export const PostSelectReducer = (state = "css", { type, payload }) => {
  switch (type) {
    case Type.SELECT_VALUE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  post: PostReducers,
  filter: PostSelectReducer
});
