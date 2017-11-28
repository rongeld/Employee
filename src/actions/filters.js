// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
})

// SET_CITY_FILTER
export const setCityFilter = (city = []) => ({
   type: 'SET_CITY_FILTER',
   city
})

// SET_SPECIALIZATION_FILTER
export const setSpecializationFilter = (specialization = '') => ({
   type: 'SET_SPECIALIZATION_FILTER',
   specialization
})