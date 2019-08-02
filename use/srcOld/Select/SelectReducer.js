import { Type } from "../Timer/TimerActions";
const SelectReducer = (state = { value: 5, label: 5 }, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;
    default:
      return state;
  }
};

export default SelectReducer;
