import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducer';

const store = createStore(
  contactsReducer,
  composeWithDevTools(applyMiddleware()),
);
// const contacts = {
//   items: [],
//   filter: '',
// };

export default store;
