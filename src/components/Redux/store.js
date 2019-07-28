import { createStore, combineReducers } from 'redux';
import timerReducer from '../Timer/TimerReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import selectReducer from '../Select/SelectReducer';
// const reduser = (state = {}, action) => state;
const rootRedusers = combineReducers({
  value: timerReducer,
  step: selectReducer,
});

const store = createStore(rootRedusers, devToolsEnhancer());

export default store;
