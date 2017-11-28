import {createStore, combineReducers} from 'redux';
import employeesReducer from '../reducers/employees';
import filtersReducer from '../reducers/filters';

// Store Creation
export default () => {
   const store = createStore(
      combineReducers({
         employees: employeesReducer,
         filter: filtersReducer
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
   return store;
}


