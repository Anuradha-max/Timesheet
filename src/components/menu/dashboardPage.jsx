import React from 'react';
import Header from '../header/header.jsx'


export default function Dashboard(){
return (
    <div>
		<Header />


	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>

<label><b>Message Board</b></label>
<hr></hr>

<label><b>Reminders</b></label>
<hr></hr>

<label><b>Reports</b></label>

	</div>
    </div>
);
};
