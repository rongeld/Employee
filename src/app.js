import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addEmployee } from './actions/employees';
import {setTextFilter, setCityFilter} from './actions/filters';
import getVisibleEmployees from './selectors/employees';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addEmployee({name: 'andrew', email:'andrew@gmail.com', city: 'Kyiv'}));
store.dispatch(addEmployee({name: 'lara', email:'andrew@ghail.com', city: 'Lviv'}));
store.dispatch(addEmployee({name: 'Kris', email:'kris@ghail.com',city: 'San Francisco', specialization: 'Backend'}));



const state = store.getState();
const visibleEmployees = getVisibleEmployees(state.employees, state.filter)

console.log(visibleEmployees)






const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));


