import React from 'react';
import {connect} from 'react-redux';
import EmployeeListItem from './EmployeeListItem';
import selectEmployees from '../selectors/employees';

class EmployeeList extends React.Component {
   render() {
   return (
      <div>
         {this.props.employees.map((employee) => {
            return <EmployeeListItem  {...employee} key={employee.id}/>
         })}  
      </div>
   );
}
}

const mapStateToProps = (state) => {
   return {
      employees: selectEmployees(state.employees, state.filter)
   }
}

export default connect(mapStateToProps)(EmployeeList);
 
