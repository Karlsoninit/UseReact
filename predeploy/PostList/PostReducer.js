import { combineReducers } from "redux";
import { EctionsType } from "./PostListAction";
const ItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case EctionsType.FETCH_POSTS:
      return payload;
    default:
      return state;
  }
};

const SelectedTag = (state = null, { type, payload }) => {
  switch (type) {
    case EctionsType.CHANGE_TAG:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: ItemsReducer,
  SelectedTag: SelectedTag
});
