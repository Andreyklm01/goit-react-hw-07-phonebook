import { createStore } from 'redux';

const reducer = (
  state = {
    contacts: {
      items: [],
      filter: '',
    },
  },
  action,
) => state;

const store = createStore(reducer);
