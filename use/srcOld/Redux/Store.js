import { createStore, combineReducers } from "redux";
import timerReducer from "../Timer/TimerReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

// const reducer = ({ state = 0, action }) => state;
const rooteReducer = combineReducers({
  timer: timerReducer
});
const store = createStore(rooteReducer, devToolsEnhancer());

export default store;
