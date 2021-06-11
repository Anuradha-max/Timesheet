import React from 'react';
import Header from '../header/header.jsx'
import {Link} from 'react-router-dom';

export default function TimesheetPage(){


return (
	
    <div>
	<Header />
	<div class="timesheet">
	<Link to='/requesttimesheet' style={{color:"white"}}>Create/Edit</Link>
	</div>
    </div>
	
);
};
