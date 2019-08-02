import { createStore, combineReducers } from "redux";
import CounterReducer from "../Counter/CounterReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import PostReducer from "../PostList/PostReducer";
// const reducer = (state = {}, action) => state;

const reducer = combineReducers({ count: CounterReducer, posts: PostReducer });

const store = createStore(reducer, devToolsEnhancer());

export default store;
