import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from './actions';

const contactsInitialState = [];

export const conctactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {state.push(action.payload)},
    [deleteContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload)},
})