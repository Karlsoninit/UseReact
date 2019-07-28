import { Type } from '../Timer/TimerAction';

export const selectReduser = (state = { value: 2, label: 2 }, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;
    default:
      return state;
  }
};

export default selectReduser;
