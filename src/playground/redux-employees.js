import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EMPLOYEE
const addEmployee = (
   {
      name = '',
      image = undefined,
      city = '',
      specialization = '',
      localTime = 0,
      tel = 0,
      email = '',
      floor = 0
   } = {}
) => ({
   type: 'ADD_EMPLOYEE',
   employee: {
      id: uuid(),
      name,
      city,
      image,
      specialization,
      localTime,
      tel,
      email,
      floor
   }
})

// REMOVE_EMPLOYEE
const removeEmployee = ({id} = {}) => ({
   type: 'REMOVE_EMPLOYEE',
   id
})

// EDIT_EMPLOYEE
const editEmployee = (id, updates) => ({
   type: 'EDIT_EMPLOYEE',
   id,
   updates
}) 

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
})

// SET_CITY_FILTER
const setCityFilter = (city = '') => ({
   type: 'SET_CITY_FILTER',
   city
})

// SET_SPECIALIZATION_FILTER
const setSpecializationFilter = (specialization = '') => ({
   type: 'SET_SPECIALIZATION_FILTER',
   specialization
})

// Employee Reducer
const employeesReducerDefaultState = [];

const employeesReducer = (state = employeesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_EMPLOYEE':
         return [
            ...state,
            action.employee
         ];
      case 'REMOVE_EMPLOYEE':
         return state.filter(({id}) => {
            return id !== action.id;
         });
      case 'EDIT_EMPLOYEE':
         return state.map((employee) => {
            if (employee.id == action.id) {
               return {
                  ...employee,
                  ...action.updates
               }
            } else {
               return employee
            };
         });
      default:
         return state;
   }
}

// Filter Reducer
const filtersReducerDefaultState = {
   text: '',
   setCityFilter: ['Kyiv', 'Lviv'],
   setSpecializationFilter: ['Frontend', 'Backend']
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         };
      case 'SET_CITY_FILTER':
         return {
            ...state
         }
      case 'SET_SPECIALIZATION_FILTER':
         return {
            ...state
         }
      default:
         return state;
   }
}

// Get visible employees

const getVisibleEmployees = (employees, {text, setCityFilter, setSpecializationFilter}) => {
   return employees.filter((employees) => {
      const textMatch = employees.name.toLowerCase().includes(text.toLowerCase()) || employees.email.toLowerCase().includes(text.toLowerCase());
      const setCityFilterMatch = setCityFilter.includes(employees.city);
      const setSpecializationFilterMatch = setSpecializationFilter.includes(employees.specialization)
      

      return textMatch && setCityFilterMatch && setSpecializationFilterMatch;
   });
}

// Store Creation
const store = createStore(
   combineReducers({
      employees: employeesReducer,
      filter: filtersReducer
   })
);

store.subscribe(() => {
   const state = store.getState();
   const visibleEmployees = getVisibleEmployees(state.employees, state.filter)

   console.log(visibleEmployees)
   console.log(state)
   
})

const employeeOne = store.dispatch(addEmployee({
   name: 'Vera Mertens',
   specialization: 'Operations',
   email: 'jogn@hotmail.com',
   city: 'Kyiv'
}));
const employeeTwo = store.dispatch(addEmployee({
   name: 'Andrew Zakrevskiy',
   specialization: 'Operations',
   email: 'vera-mertnes@hotmail.com',
   city: 'Lviv'
}));
store.dispatch(addEmployee({
   name: 'Andrew Mead',
   specialization: 'Frontend',
   email: 'vera-mertnes@hotmail.com',
   city: 'Kyiv'
}));
store.dispatch(addEmployee({
      name: 'Sarah Connor',
      specialization: 'Backend',
      email: 'vera-mertnes@hotmail.com',
      city: 'San Francisco'
}));
store.dispatch(addEmployee({
      name: 'Sarah Connor',
      specialization: 'Frontend',
      email: 'vera-mertnes@hotmail.com',
      city: 'Kyiv'
}));



// store.dispatch(removeEmployee({id: employeeOne.employee.id}));
// store.dispatch(editEmployee(employeeTwo.employee.id, { city: 'Borispol' }))
// store.dispatch(setTextFilter('jogn@hotmail.com'));
// store.dispatch(setCityFilter('borispol'));
// store.dispatch(setSpecializationFilter('frontend'));



// const demoState = {
//    employee: [{
//       id: 'fsdfsg',
//       name: 'Vera Mertens',
//       specialization: 'Operations',
//       floor: 2,
//       city: 'lviv',
//       localTime: '3:42pm',
//       tel: '+38 (032) 497-1888',
//       email: 'vera-mertnes@hotmail.com'
//    }],
//    filters: {
//       text: 'name',
//       setCityFilter: 'Lviv',
//       setSpecializationFilter: 'Operations'
//    }
// }