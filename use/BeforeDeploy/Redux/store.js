import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import CounterReducer from "../Counter/CounterReducer";
import SelectReducer from "../Select/SelectReducer";
// const reducer = (state = 0, action) => state;

const defaultReducer = combineReducers({
  count: CounterReducer
});

const store = createStore(defaultReducer, devToolsEnhancer());

export default store;
