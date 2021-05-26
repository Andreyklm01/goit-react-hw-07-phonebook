import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.loading;
export const getAllContacts = state => state.items;
export const getFilter = state => state.filter;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
