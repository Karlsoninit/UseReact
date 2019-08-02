import { Type } from "./CounterAction";
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

const SelectStep = (state = 5, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_CHOICE:
      return payload;
    default:
      return state;
  }
};

const reducerDouble = combineReducers({
  value: ReducerValue,
  step: SelectStep
});

export default reducerDouble;
