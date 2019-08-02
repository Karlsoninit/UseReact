import { Type } from "../Timer/TimerActions";
export const change = value => ({
  type: Type.CHANGE_STEP,
  payload: value
});
