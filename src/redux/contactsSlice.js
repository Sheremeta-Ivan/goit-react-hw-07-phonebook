import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Bill Gates', number: '444-89-13' },
    { id: 'id-2', name: 'Elon Musk', number: '644-11-22' },
    { id: 'id-3', name: 'Steve Jobs', number: '349-14-96' },
    { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    //add contact in items
    addContact(state, action) {
      state.items.push(action.payload);
    },
    //remove contact from items
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
