import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import countReducer from './countReducer';

export default combineReducers({
  accounts: accountsReducer,
  count: countReducer
  });