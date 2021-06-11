import React from 'react';
import './index.css';
import LoginNew, { Logincontext } from './components/login/login.jsx'
import Forget from './components/login/forget.jsx';
import Register from './components/login/register.jsx';
import Home from './components/menu/home.jsx'
import DashboardPage from './components/menu/dashboardPage.jsx'
import TimesheetPage from './components/menu/timesheetPage.jsx'
import ReportsPage from './components/menu/reportsPage.jsx'
import RequestTimesheet from './components/timesheet/requesettimesheet.jsx'
import Edittimesheet from './components/timesheet/edittimesheet.jsx'
import CreateProject from './components/projects/createProject.jsx'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import UpdateRequest from './components/login/updateRequest';
import UpdateRegistration from './components/login/updateRegister';
import Header from './components/header/header';
import Login from './components/login/login.jsx';
import editProjectRequest from './components/projects/editProjectRequest';
import editProject from './components/projects/editProject';
import MonthlyReports from './components/reports/MonthlyReports';
import ProjectReports from './components/reports/ProjectReports';
import WeeklyReports from './components/reports/WeeklyReports';
import YearlyReports from './components/reports/YearlyReports';

  export default function App(){
    return (
      
     <div class='App'>

      
       
    <>
    
    <Router>
      <Route exact path='/' component={LoginNew} />
      <Route exact path='/forget' component={Forget} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/updaterequest' component={UpdateRequest} />
      <Route exact path='/updateregistration' component={UpdateRegistration} />
      <Route exact path='/dashboardPage' component={DashboardPage} />
      <Route exact path='/timesheetPage' component={TimesheetPage} />
      <Route exact path='/reportsPage' component={ReportsPage} />
      <Route exact path='/requesttimesheet' component={RequestTimesheet} />
      <Route exact path='/edittimesheet' component={Edittimesheet} />
      <Route exact path='/createProject' component={CreateProject} />
      <Route exact path='/editProjectRequest' component={editProjectRequest} />
      <Route exact path='/editProject' component={editProject} />
      <Route exact path='/Header' component={Header} />
      <Route exact path='/MonthlyReports' component={MonthlyReports} />
      <Route exact path='/ProjectReports' component={ProjectReports} />
      <Route exact path='/WeeklyReports' component={WeeklyReports} />
      <Route exact path='/YearlyReports' component={YearlyReports} />
      <Route exact path='/Login' component={Login} />
    </Router>
    </>
    
    </div>
    )
  }


