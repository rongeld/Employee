import { createStore } from 'redux';

const increment = ({incrementBy = 1}= {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(increment({incrementBy: 5}));



