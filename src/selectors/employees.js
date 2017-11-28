// Get visible employees
export default (employees, {text, setSpecializationFilter}) => {
   return employees.filter((employees) => {
      const textMatch = employees.name.toLowerCase().includes(text.toLowerCase()) || employees.email.toLowerCase().includes(text.toLowerCase());
      const setSpecializationFilterMatch = employees.specialization.includes(setSpecializationFilter);

      return textMatch  && setSpecializationFilterMatch;
   });
};