import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import PostReducer from '../components/Posts/PostsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import FormReducer from '../components/FormValue/FormReducer';
import ReduxThunk from 'redux-thunk';
const reducer = combineReducers({
  posts: PostReducer,
  value: FormReducer,
});

// const reducer = (state = 4, action) => state;

//middleware

const middleware = [ReduxThunk];

const enhancer = applyMiddleware(...middleware);

const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
