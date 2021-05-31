import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const token = {};

export const registration = data => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/users/signup', data);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const login = data => dispatch => {};
export const logout = {};

export const getCurrentUser = () => (dispatch, getState) => {};
