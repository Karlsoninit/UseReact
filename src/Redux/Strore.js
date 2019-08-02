import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import CounterReducer from "../Counter/CounterReducer";
import PostsReducer from "../Posts/PostsReducer";
import Logger from "redux-logger";
import LoggerDefault from "../Middleware/Middleware";
const reducers = combineReducers({
  count: CounterReducer,
  posts: PostsReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(LoggerDefault, Logger))
);

export default store;
