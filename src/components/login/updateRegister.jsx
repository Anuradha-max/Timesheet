import React,{useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import Header from "../header/header";
import validator from 'validator'

export default function UpdateRegistration  ()  {

    const history = useHistory();

    const [companyidReg,setCompanyidReg]=useState('')
    const [useridReg,setUseridReg]=useState('')
    const [firstnameReg,setFirstnameReg]=useState('')
    const [lastnameReg,setLastnameReg]=useState('')
    const [emailidReg,setEmailIdReg]=useState('')
    const [passwordReg,setPasswordReg]=useState('')
    const [genderReg,setGenderReg]=useState('')
    const [mobilenoReg,setMobilenoReg]=useState('')
    const [roleReg,setRoleReg]=useState('')
    const [statusReg, setStatusReg]=useState('')

    const [emailError, setEmailError] = useState('')

    //const [regstatus,setRegStatus]=useState('')

    var [uid,setUid]=useState(localStorage.getItem('myuserid'))
    
    //This useEffect runs when the update request uid updates.
    useEffect(() =>{
        regDetails();
      },[])
    
    const regDetails = () =>{
        
    Axios.get("http://localhost:3001/selectprofile",{
        params:{
               a:uid
        }
       
    }
    
    ).then((response)=>{
        //console.log(response)
        setCompanyidReg(response.data[0].cid);
        setUseridReg(response.data[0].uid);
        setFirstnameReg(response.data[0].fname);
        setLastnameReg(response.data[0].lname);
        setEmailIdReg(response.data[0].Email);
        setPasswordReg(response.data[0].pass);
        setGenderReg(response.data[0].gender);
        setMobilenoReg(response.data[0].mobile);
        setRoleReg(response.data[0].Role);
        setStatusReg(response.data[0].Status);
      
        setUid(response.data[0].uid);
        
     })
    }
   


    const update=(e)=>{
      e.preventDefault();
        if(companyidReg !== '' && useridReg !== '' && firstnameReg !== '' && lastnameReg !== '' && emailidReg !== '' && passwordReg !== '' && genderReg !== '' && mobilenoReg !== '' && roleReg !== ''){
       
        Axios.post("http://localhost:3001/updateprofile",{
            
        emailid:emailidReg,
        userid:useridReg,
        companyid:companyidReg,
        firstname:firstnameReg,
        lastname: lastnameReg,
        gender : genderReg,
        mobileno:mobilenoReg,
        password: passwordReg,
        role:roleReg,
        status:statusReg,
     
  }).then((response)=>{
       //setRegStatus(response.data.message);
       
        alert(useridReg+" Updated Successfully")

        setCompanyidReg('');
        setUseridReg('');
        setFirstnameReg('');
        setLastnameReg('');
        setEmailIdReg('');
        setPasswordReg('');
        setGenderReg('');
        setMobilenoReg('');
        setRoleReg('');
        setStatusReg('')

        localStorage.setItem('myuserid', '');
        history.push('/updaterequest')
      
     });

    }else{
        alert("Please Enter Mandatory Fields")
    }
 };
 
   

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
<form onSubmit={update}>
<div className="form-register">

<label className="form-register-label">COMPANY ID<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="text" value={companyidReg} readOnly
required onChange= {(e) => {
    setCompanyidReg(e.target.value);
    }} />
    </div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">USER ID<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input value={useridReg} readOnly onChange= {(e) => {
    setUseridReg(e.target.value);
    }} /></div>
    </div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">FIRST NAME<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="text"
value={firstnameReg}
required
onChange= {(e) => {
    setFirstnameReg(e.target.value);
    console.log("Firstname: "+firstnameReg)
    }} 
/>
</div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">LAST NAME<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
type="text"
value={lastnameReg}
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
required onChange= {validateEmail} 
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
readOnly value={passwordReg}
onChange= {(e) => {
setPasswordReg(e.target.value);
}}
required />
</div>
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">GENDER<super style={{color:"red"}}>*</super> : </label>
 

<input type="radio" value="Male" name="gender"  checked={genderReg==='Male'} onChange= {(e) => {
setGenderReg(e.target.value);
}}
required/> Male
<input type="radio" value="Female" name="gender" checked={genderReg==="Female"}  onChange= {(e) => {
setGenderReg(e.target.value);
}}
required/> Female
</div>
<br/><br/>
<div className="form-register">
<label className="form-register-label">MOBILE<super style={{color:"red"}}>*</super> : </label>
<div className="form-register-inputs">
<input
value={mobilenoReg}
name="Mobile"
required 
maxlength="10"
pattern="[7896][0-9]{9}"
onChange= {(e) => {
    setMobilenoReg(e.target.value);
    }} 
/>
</div>
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
<br/><br/>

<div className="form-register">
<label className="form-register-label">STATUS<super style={{color:"red"}}>*</super> : </label>
<input type="radio" value="A" name="Active" checked={statusReg==="A"} onChange={(e)=> setStatusReg(e.target.value)}/> Active
<input type="radio" value="I" name="Inactive"  checked={statusReg==="I"} onChange={(e)=> setStatusReg(e.target.value)}/> Inactive
</div>


<br/><br/>
<input type="submit" value="update"/>
</form>
</div>
</div>

)
}

