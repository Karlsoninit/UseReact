import { Type } from "../Redux/Type";
const PostSelectReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SELECT_VALUE:
      return payload;
    default:
      return state;
  }
};

export default PostSelectReducer;
