import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { registerSuccess } from './auth-actions';

const initialState = { name: '', email: '' };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
});
const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {});

export default combineReducers({
  user,
  token,
  error,
});
