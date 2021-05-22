import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducer';

// const store = createStore(
//   contactsReducer,
//   composeWithDevTools(applyMiddleware()),
// );

const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
