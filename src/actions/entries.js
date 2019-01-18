import uuid from 'uuid';
import database from '../firebase/firebase';


//
// ACTION FUNCTIONS FOR ENTRIES

export const addEntry = (entry) => ({
    type: 'ADD_ENTRY',
    entry
});

export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id,
    updates
});

export const removeEntry = (id) => ({
    type: 'REMOVE_ENTRY',
    id
});

export const setEntries = (entries) => ({
    type: 'SET_ENTRIES',
    entries
})


