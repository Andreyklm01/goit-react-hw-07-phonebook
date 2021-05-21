import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducer';

const store = createStore(
  contactsReducer,
  composeWithDevTools(applyMiddleware()),
);

export default store;
