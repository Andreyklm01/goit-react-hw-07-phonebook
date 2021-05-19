import types from './types';
import { v4 as uuidv4 } from 'uuid';

const addName = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteName = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const filterByName = name => ({
  type: types.FILTER,
  payload: name,
});

export default { addName, deleteName };
