import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
  contactsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
