import Type from "./Type";

export const increment = value => ({
  type: Type.INCREMENT,
  payload: value,
  meta: {
    throttle: 3000
  }
});
export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value,
  meta: {
    throttle: 5000
  }
});

export const changeValue = step => ({
  type: Type.CHANGE_VALUE,
  payload: step
});

export const getPosts = posts => ({
  type: Type.GET_POSTS,
  payload: posts
});

export const selectValue = value => ({
  type: Type.SELECT_VALUE,
  payload: value
});

export const deleteItems = id => ({
  type: Type.DELETE_ITEMS,
  payload: id
});
