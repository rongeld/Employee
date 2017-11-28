import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import EmployeeDashboardPage from '../components/EmployeeDashboardPage';
import AddEmployeePage from '../components/AddEmployeePage';
import EditEmployeePage from '../components/EditEmployeePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={EmployeeDashboardPage} exact={true} />
        <Route path="/create" component={AddEmployeePage} />
        <Route path="/edit/:id" component={EditEmployeePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
