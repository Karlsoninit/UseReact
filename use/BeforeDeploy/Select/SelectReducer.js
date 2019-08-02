import { Type } from "../Counter/CounterAction";

const SelectReducer = (state = { value: 5, label: 5 }, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_STEP:
      return payload;
    default:
      return state;
  }
};

export default SelectReducer;
