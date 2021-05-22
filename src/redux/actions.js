import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addName = createAction('contacts/ADD_CONTACT', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteName = createAction('contacts/DELETE_CONTACT');

const filterByName = createAction('contacts/FILTER_CONTACTS');

// const addName = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteName = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filterByName = name => ({
//   type: types.FILTER,
//   payload: name,
// });

export default { addName, deleteName, filterByName };
