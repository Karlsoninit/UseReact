import Type from "../Redux/Type";
import { combineReducers } from "redux";

const ReducerValue = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;
    case Type.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const ReducerStep = (state = 10, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_VALUE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  value: ReducerValue,
  step: ReducerStep
});
