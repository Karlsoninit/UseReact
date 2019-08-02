import { Type } from "./CounterAction";
import { combineReducers } from "redux";
// const initialState = {
//   value: 0,
//   step: {
//     value: 5,
//     label: 5
//   }
// };

// const CounterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case Type.INCREMENT:
//       return {
//         ...state,
//         value: state.value + payload
//       };
//     case Type.DECREMENT:
//       return {
//         ...state,
//         value: state.value - payload
//       };
//     case Type.CHANGE_STEP:
//       return {
//         ...state,
//         step: payload
//       };
//     default:
//       return state;
//   }
// };

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;
    case Type.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const stepReducer = (state = { value: 5, label: 5 }, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_STEP:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer
});
