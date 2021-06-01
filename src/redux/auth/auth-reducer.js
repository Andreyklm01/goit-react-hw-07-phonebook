import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  loginSuccess,
  loginError,
  registerError,
  registerSuccess,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialState = { name: '', email: '' };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
