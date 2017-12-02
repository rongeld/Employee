// Filter Reducer
const filtersReducerDefaultState = {
   text: '',
   setCityFilter: [],
   setSpecializationFilter: []
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
            ...state,
            setCityFilter: [...state.setCityFilter, action.city]
         };
      case 'REMOVE_SPECIALIZATION':
         return {
            ...state,
            setSpecializationFilter: state.setSpecializationFilter.filter((specialization) => specialization !== action.specialization)
      }
      case 'REMOVE_CITY':
         return {
               ...state,
               setCityFilter: state.setCityFilter.filter((city) => city !== action.city)
         }
     
      case 'SET_SPECIALIZATION_FILTER':
         return {
            ...state,
            setSpecializationFilter: [...state.setSpecializationFilter, action.specialization]
         }
      default:
         return state;
   }
}

export default filtersReducer;

