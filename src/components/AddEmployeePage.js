import React from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {addEmployee} from '../actions/employees';

const AddEmployeePage = (props) => (
  <div>
    <h1>Add Employee</h1>
    <EmployeeForm 
      onSubmit={(employee) => {
        props.dispatch(addEmployee(employee));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddEmployeePage);
