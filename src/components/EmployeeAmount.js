import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectEmployees from '../selectors/employees';

export const EmployeeAmount = ({ employeeCount }) => {

   const employeeWord = employeeCount > 1 ? 'were' : 'was';
   const employeeEnding = employeeCount > 1 ? 'employees' : 'employee';

   return (
      <div>
         <p>{employeeCount} {employeeEnding} {employeeWord} found</p>
         <Link to="/create">Add Employee</Link>
      </div>
   )
}

const mapStateToProps = (state) => {
   const visibleEmployees = selectEmployees(state.employees, state.filter);
   console.log(visibleEmployees.length);
   return {
     employeeCount: visibleEmployees.length
   };
 };
 
 export default connect(mapStateToProps)(EmployeeAmount);
 