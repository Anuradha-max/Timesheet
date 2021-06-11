//import { Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import React,{useState } from 'react';
import Axios from 'axios';
import logo1 from '../../chachapoya-logo.png'
import {Link} from 'react-router-dom'
function Forget(){
   const [usernameReg,setUsernameReg]=useState('')
   const [passwordReg,setPasswordReg]=useState('')
   const [cpasswordReg,setCPasswordReg]=useState('')
   const [pswdstatus,setPswdStatus]=useState('')
   document.body.style.backgroundColor = "wheat"



const forget=(e)=>{
    e.preventDefault();
   
    
       Axios.post("http://localhost:3001/forget",{
        username: usernameReg,
        password: passwordReg,
       cpassword:cpasswordReg,
        
    }).then((response)=>{
      
      
         setPswdStatus(response.data.message);
         setUsernameReg('');
         setPasswordReg('');
         setCPasswordReg('');
       // alert(response.data.message)
       
    });
};
return(
<div>
<div><img className="login-img" src={logo1} alt='Logo'/></div>
<div class="login">

<form className="loginst" onSubmit={forget}>
<h3>{pswdstatus}</h3>
    <h2 style={{color: "red",fontsize: "xx-large"}}>FORGOT PASSWORD</h2>

<div>
    <div className="login-input">
<label className="login-label">Login Id:</label><br/>
<input type="text" placeholder="Enter Username"  value={usernameReg}  onChange= {(e) => {
    setUsernameReg(e.target.value);
    }} required/>
    </div><br/>
    <div className="login-input">
<label className="login-label">New Password</label><br/>
<input type="password" placeholder="Enter New password" value={passwordReg}  onChange= {(e) => {
    setPasswordReg(e.target.value);
    }} required/>
    </div><br/>
    <div className="login-input">
<label className="login-label">Confirm Password</label><br/>
<input type="password" placeholder="Confirm password" value={cpasswordReg} onChange= {(e) => {
    setCPasswordReg(e.target.value);
    }} required/>
    </div>
<br/>
{/* <input type="button" value="Log in" class="button" onClick={()=> ReturnLogin()}/>{' '}  */}
<input type="submit" value="Submit"/>{' '}<br/><br/>
goto login page{'  '} <Link to="/Login" style={{fontWeight:"bold"}}>Sign in</Link><br/><br/>
</div>
</form>
</div>

</div>
)

}
export default Forget;
