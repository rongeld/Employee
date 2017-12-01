// Filter Reducer
const filtersReducerDefaultState = {
   text: '',
   setCityFilter: [],
   setSpecializationFilter: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         };
      case 'SET_CITY_FILTER':
      console.log(state.setCityFilter)
         return {
            ...state,
            setCityFilter: [...state.setCityFilter, action.city]
         };
     
      case 'SET_SPECIALIZATION_FILTER':
         return {
            ...state,
            setSpecializationFilter: action.specialization
         }
      default:
         return state;
   }
}

export default filtersReducer;