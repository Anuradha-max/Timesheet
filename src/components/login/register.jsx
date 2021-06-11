import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import Header from '../header/header.jsx'
import validator from 'validator'

export default  function Register(){


  const [companyidReg,setCompanyidReg]=useState('CHACHAPOYA')
  const [useridReg,setUseridReg]=useState('')
  const [firstnameReg,setFirstnameReg]=useState('')
  const [lastnameReg,setLastnameReg]=useState('')
  const [emailidReg,setEmailIdReg]=useState('')
  const [passwordReg,setPasswordReg]=useState('')
  const [genderReg,setGenderReg]=useState('')
  const [mobilenoReg,setMobilenoReg]=useState('')
  const [roleReg,setRoleReg]=useState('')
  

  const [emailError, setEmailError] = useState('')
  //const [regstatus,setRegStatus]=useState('')
 


  const regid = () =>{
   // console.log("regid")
  Axios.get("http://localhost:3001/register",{
   
  }).then((response)=>{
  
    setUseridReg(response.data.id);
   
   })
  }
// the below useEffect controls the execution of regid function when useridReg changed.
 useEffect(()=>{
   regid()
 })
  
 //regid()
  const register=(e)=>{
    e.preventDefault();

      Axios.post("http://localhost:3001/register",{
      emailid:emailidReg,
      userid:useridReg,
      companyid:companyidReg,
      firstname:firstnameReg,
      lastname: lastnameReg,
      gender : genderReg,
      mobileno:mobilenoReg,
      password: passwordReg,
      role:roleReg,
      
   
}).then((response)=>{
    // setRegStatus(response.data.message);
     //Set all fileds as null after register
    alert(useridReg+" Registered Successfully")
     e.preventDefault();
     setFirstnameReg('');
     setLastnameReg('');
     setEmailIdReg('');
     setPasswordReg('');
     setGenderReg('');
     setMobilenoReg('');
     setRoleReg('');
    
     regid();
    
   });
};
//below use effect used for unwanted render of functional component.
// useEffect(()=>{

// },[firstnameReg,lastnameReg,emailidReg,passwordReg,genderReg,mobilenoReg,roleReg])

//console.log("Role:",roleReg)
function validateEmail(e){
  e.preventDefault();
  var email = e.target.value;
  setEmailIdReg(e.target.value);
  
  if (validator.isEmail(email)) {
    
    setEmailIdReg(e.target.value);
    setEmailError('')
  } else {
    setEmailError('Enter valid Email!')
  }
}




return(
  <div>
<Header />
  <div class="register">

<center>
<h1> REGISTRATION </h1>
</center>

<form onSubmit={register}>

  <div className="form-register">
<label className="form-register-label">COMPANY ID<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
      type="text" 
      value={companyidReg} 
      readOnly
      required 
      onChange= {(e) => {
      setCompanyidReg(e.target.value);
      }} />
      </div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">USER ID<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input value={useridReg} 
    readOnly 
    onChange= {(e) => {
        setUseridReg(e.target.value);
    }} />
    </div>
    </div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">FIRST NAME<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="text"
value={firstnameReg}
placeholder="Enter First Name"
name="firstname"
required 
onChange= {(e) => {
  setFirstnameReg(e.target.value);
  }} 
/></div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">LAST NAME<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="text"
value={lastnameReg}
placeholder="Enter Last Name"
name="Lastname"
required onChange= {(e) => {
  setLastnameReg(e.target.value);
  }} 
/></div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">EMAIL ID<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="email"
value={emailidReg}
placeholder="Enter Email"
name="Email Id"
required 
pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
onChange= {validateEmail}
/><br/><span style={{
          fontWeight: 'none',
          color: 'red',
        }}>{emailError}</span></div>
        </div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">PASSWORD<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="password"
value={passwordReg}
placeholder="Enter Password"
required onChange= {(e) => {
  setPasswordReg(e.target.value);
  }} 

/></div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">GENDER<super style={{color:"red"}}>*</super> : </label>

<input type="radio" value={genderReg !== ''?"Male":""} checked={genderReg === "Male"}  name="gender" onChange= {() => {
setGenderReg("Male");
}}
required/> Male
<input type="radio" value={genderReg !== ''?"Female":""} checked={genderReg === "Female"}  name="gender" onChange= {() => {
setGenderReg("Female");
}}
required/> Female
</div>

<br/><br/>
<div className="form-register">
<label className="form-register-label">MOBILE<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="text"
value={mobilenoReg}
placeholder="Enter Mobile no"
name="Mobile"
required 
maxlength="10"
pattern="[7896][0-9]{9}"
onChange= {(e) => {
  setMobilenoReg(e.target.value);
  }} 
/></div>
</div>
<br/><br/>


<div className="form-register">
<label className="form-register-label">ROLE<super style={{color:"red"}}>*</super> : </label>

<select className="form-register-select" value={roleReg} onChange={(e)=> setRoleReg(e.target.value)} required>
<option value="">Choose Option</option>
<option value="Senior Manager">Senior Manager</option>
<option value="Manager">Manager</option>
<option value="Senior Consultant">Senior Consultant</option>
<option value="Consultant">Consultant</option>
<option value="Associate Consultant">Associate Consultant</option>
</select>
</div>
<br/><br/><br/><br/>
<input type="submit" value="Register"/>
</form>
</div>
</div>
)
}


