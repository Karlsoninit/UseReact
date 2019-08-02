import { Type } from "../Counter/CounterAction";
export const stepReducer = step => ({
  type: Type.CHANGE_STEP,
  payload: step
});
