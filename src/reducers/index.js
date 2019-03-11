import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import filterReducer from './filterReducer'
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
  errors: errorReducer
});

export default rootReducer;