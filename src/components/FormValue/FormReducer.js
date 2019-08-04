import { Type } from '../../Redux/Type';

const FormReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.FIND_POSTS:
      return payload;
    default:
      return state;
  }
};

export default FormReducer;
