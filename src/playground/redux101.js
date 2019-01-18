import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
   type: 'DECREMENT',
   decrementBy
});

const resetCount = () => ({
   type: 'RESET' 
});

const setCount = ({ count }) => ({
   type: 'SET',
   count
});


const countReducers = (state = { count: 0 }, action) => {


//cases for all the different actions
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducers);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});

// Actions

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101}));