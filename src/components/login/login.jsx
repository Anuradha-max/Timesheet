import { React, useState} from 'react';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import logo from '../../chachapoya-logo1.png';
import Axios from 'axios';


export default function Login (){
  
  const [usernameReg,setUsernameReg]=useState('')
  const [passwordReg,setPasswordReg]=useState('')
  const [loginstatus,setLoginStatus]=useState('')

  document.body.style.backgroundColor = "rosybrown"



  const history = useHistory();
   
  

  const Login=(e)=>{
    e.preventDefault();



// if(usernameReg !== '' && passwordReg !== ''){
    Axios.post("http://localhost:3001/login",{
    username: usernameReg,
    password: passwordReg,
   
}).then((response)=>{
  if(response.data.message){
    setLoginStatus(response.data.message);
   // console.log("response: "+response.data.message);
  
     }
  else{ 
   
const status = response.data[0].Status;
//alert(status)
if(status === "A"){
localStorage.setItem("LoginId",usernameReg.toUpperCase());
localStorage.setItem("Role",response.data[0].Role);
history.push('/header');

}else{
setLoginStatus("User Inactive");
}
  }
   
});
};


return (
  <div>
<div><img className="login-img" src={logo} alt='Logo'/></div>
<div class="login">


 
  <form className="loginst" onSubmit={Login}>
  <h3 >{loginstatus}</h3>
    <h1 style={{color: "red",fontsize: "xx-large"}}>LOGIN</h1>
    <div>
      <div className="login-input">
    <label className="login-label">USER ID:</label><br/>
          <input type="text"
        placeholder="Enter Username"  
        value={usernameReg} 
        onChange= {(e) => {
          setUsernameReg(e.target.value);
        }} 
        required
        />
      </div><br/>
      <div className="login-input">
      <label className="login-label">PASSWORD:</label><br/>
      <input  type="password" 
        placeholder="Enter password" 
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }} 
        required/>
      </div>
      <br/>
      <input type="submit" value="Login"/>
      <br/><br/>

      Need to find{'  '} <Link to="/forget" style={{fontWeight:"bold"}}>your password?</Link><br/><br/>
    </div>
  </form>

</div>
</div>


)
}

