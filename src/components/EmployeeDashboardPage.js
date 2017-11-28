import React from 'react';
import EmployeeList from './EmployeesList';
import EmployeeListFilters from './EmployeeListFilter';
import EmployeeAmount from './EmployeeAmount';
import Header from './Header';

const EmployeeDashboardPage = () => (
  <div>
    <Header />
    <EmployeeListFilters />
    <EmployeeAmount />
    <EmployeeList />
  </div>
);

export default EmployeeDashboardPage;
