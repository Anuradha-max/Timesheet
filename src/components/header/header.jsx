import logo from '../../logo.jpg';
import logo1 from '../../chachapoya-logo.png'
import {Link, useHistory} from 'react-router-dom';
export default function Header(){

	const Role = localStorage.getItem('Role');
	const LoginId = localStorage.getItem('LoginId');
	localStorage.setItem("Role",Role);
	const history = useHistory();
	document.body.style.backgroundColor = "LightCyan"
	const LogOut = ()=>{
		window.localStorage.clear();
		history.push("/");
		
		
	}



return(
<div>
    <div class="header" align='left'><img clasName="header-image" src={logo1} alt='Logo'/></div>

    <div className="navbar">
		<ul>
  			<li><Link to="/dashboardPage">Dashboard</Link></li>
  		
		

			{Role === "Manager" ?
		
			<li class="dropdown">
                <a href="" class="dropbtn">Project</a>
    		        <div class="dropdown-content">
      			        <Link to="/createProject">Create</Link>
      			        <Link to="/editProjectRequest">Edit</Link>
    		        </div>
            </li>
			: ''}
			{Role === "HR" ?
			<li class="dropdown" >
				<a to="" class="dropbtn">Register</a>
					<div class="dropdown-content">
						<Link to="/register">Create</Link>
						<Link to="/updaterequest">Update</Link>
					</div>
			</li>
			: ''}
			<li><Link to="/timesheetPage">Timesheet</Link></li>
            <li><Link to="/reportsPage">Reports</Link></li>
			<li><Link to="/" onClick={LogOut}>Logout</Link></li> 
			<li><a href="" id="uid">UserId-{LoginId}</a></li>
        </ul>
	</div>
</div>
)

}