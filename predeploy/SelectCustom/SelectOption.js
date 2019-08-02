import { Type } from "../Counter/CounterAction";

export const changeChoice = step => ({
  type: Type.CHANGE_CHOICE,
  payload: step
});
