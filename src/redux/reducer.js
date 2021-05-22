import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addName, deleteName, filterByName } from './actions';

const items = createReducer([], {
  [addName]: (state, { payload }) => [...state, payload],
  [deleteName]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterByName]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});


// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
