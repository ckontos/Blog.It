//
// ENTRIES REDUCER
//

const entriesReducerDefualt = [];

export default (state = entriesReducerDefualt, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [...state, action.entry];
        case 'REMOVE_ENTRY':
            return state.filter((id) => id !== action.id); 
        case 'EDIT_ENTRY':
            return state.map((entry) => {
                if (entry.id === action.id) {
                    return {
                        ...entry,
                        ...updates
                    };
                } else {
                    return expense;
                }
            });
        case 'SET_ENTRIES':
            return action.entries;
        default: return state;
    }
}