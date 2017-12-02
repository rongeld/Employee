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

//REMOVE_CITY
export const removeCity = (city = []) => ({
   type: 'REMOVE_CITY',
   city
})

//REMOVE_SPECIALIZATION
export const removeSpecialization = (specialization = []) => ({
   type: 'REMOVE_SPECIALIZATION',
   specialization
})

// SET_SPECIALIZATION_FILTER
export const setSpecializationFilter = (specialization = []) => ({
   type: 'SET_SPECIALIZATION_FILTER',
   specialization
})