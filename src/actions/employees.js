import uuid from 'uuid';

// ADD_EMPLOYEE
export const addEmployee = (
   {
      name = '',
      avatarURL = '',
      city = '',
      specialization = '',
      localTime = 0,
      telephone = null,
      email = '',
      floor = 0
   } = {}
) => ({
   type: 'ADD_EMPLOYEE',
   employee: {
      id: uuid(),
      name,
      city,
      avatarURL,
      specialization,
      localTime,
      telephone,
      email,
      floor
   }
})

// REMOVE_EMPLOYEE
export const removeEmployee = ({id} = {}) => ({
   type: 'REMOVE_EMPLOYEE',
   id
})

// EDIT_EMPLOYEE
export const editEmployee = (id, updates) => ({
   type: 'EDIT_EMPLOYEE',
   id,
   updates
}) 
