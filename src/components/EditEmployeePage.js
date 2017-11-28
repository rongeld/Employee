import React from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {editEmployee} from '../actions/employees';

const EditEmployeePage = (props) => {
  return (
    <div>
    <h1>Edit Employee</h1>
    <EmployeeForm
      employee={props.employee}
      onSubmit={(employee) => {
        props.dispatch(editEmployee(props.employee.id, employee));
        props.history.push('/');
        console.log('updated', employee)
      }}
    />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    employee: state.employees.find((employee) => employee.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditEmployeePage);
