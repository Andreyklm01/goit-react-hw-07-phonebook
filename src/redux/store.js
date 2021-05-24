import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducer';

const store = createStore(
  contactsReducer,
  composeWithDevTools(applyMiddleware()),
);

export default store;
