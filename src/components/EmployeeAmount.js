import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectEmployees from '../selectors/employees';

export const EmployeeAmount = ({ employeeCount }) => {

   const employeeWord = employeeCount > 1 ? 'were' : 'was';
   const employeeEnding = employeeCount > 1 ? 'employees' : 'employee';

   return (
      <div className="container-wrapper">
        <div className="employee-amount">
          <h3><span> {employeeCount} </span> {employeeEnding} {employeeWord} found</h3>
          <Link to="/create"><button>Add Employee</button></Link>
        </div>
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
 