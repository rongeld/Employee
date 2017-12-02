// Get visible employees
export default (employees, {text, setCityFilter, setSpecializationFilter}) => {
   return employees.filter((employees) => {
      const textMatch = employees.name.toLowerCase().includes(text.toLowerCase()) || employees.email.toLowerCase().includes(text.toLowerCase());
      const setCityFilterMatch = setCityFilter.includes(employees.city);
      const setSpecializationFilterMatch = setSpecializationFilter.includes(employees.specialization);
      return textMatch && setSpecializationFilterMatch && setCityFilterMatch;
   });
};