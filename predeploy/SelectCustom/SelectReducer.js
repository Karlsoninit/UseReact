import { Type } from "../Counter/CounterAction";
const SelectReducer = (state = 5, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_CHOICE:
      return payload;
    default:
      return state;
  }
};
export default SelectReducer;
