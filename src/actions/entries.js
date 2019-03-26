import uuid from 'uuid';
import database from '../firebase/firebase';


//
// ACTION FUNCTIONS FOR ENTRIES

export const addEntry = (entry) => ({
    type: 'ADD_ENTRY',
    entry
});

export const startAddEntry = (entryData = {} ) => {
    return (dispatch) => {
        const { title = '', createdAt = 0, body = '' } = entryData;
        const entry = { title, createdAt, body };
        database.ref('entries').push(entry).then((ref) => {
            dispatch(addEntry({
                id: ref.key,
                ...entry
            }));
        });
    };
};

export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id,
    updates
});

export const startEditEntry = (id, updates) => {
    return (dispatch) => {
        return database.ref(`entries/${id}`).update(updates).then(() => {
            dispatch(editEntry(id, updates));
        });
    };
};

export const removeEntry = ({ id } = {}) => ({
    type: 'REMOVE_ENTRY',
    id
});

export const startRemoveEntry = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeEntry({ id }));
        });
    };
};

export const setEntries = (entries) => ({
    type: 'SET_ENTRIES',
    entries
})

export const startSetEntries = () => {
    return (dispatch) => {
        return database.ref('entries').once('value').then((snapshot) => {
            const entries = [];
            snapshot.forEach((child) => {
                entries.push({
                    id: child.key,
                    ...child.val()
                });
            });
            dispatch(setEntries(entries));
        });
    };
};


