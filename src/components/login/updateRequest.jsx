
import React,{useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory} from 'react-router-dom';
import Header from '../header/header';


export default function UpdateRequest (){

    const [usernameReg,setUsernameReg]=useState([])
    const [value,setValue]=useState('');
    
    localStorage.setItem('myuserid', value);
    const history = useHistory();
   
    useEffect(()=>{
      idsdropdown();
      console.log("Update Request")
    },[])
    
    const idsdropdown = ()=>{
   Axios.get("http://localhost:3001/idsdropdown", {

    }).then((response)=>{
      //console.log("UserIds from db:",response);
     setUsernameReg(response.data) ;
     //console.log(response.data)
    }
    )
  }


    const update=()=>{   
    

if(value !== ''){
  localStorage.setItem('myuserid', value)
  //console.log("request")
  history.push('/updateregistration');
  
}else{
  alert("value not null!!");
}


  
  
}
  
return (
  
  <center>
<div >
<Header />
<br></br>
  <h2>UPDATE PROFILE</h2>
  
<select name="id" className="reports-request-select" placeholder="select an option"  value={value} onChange={(e) => setValue(e.target.value)} required>
  <option value="">Choose Option</option> 

      {usernameReg.map((result) =>{
        return <option value={result.uid} >{result.uid+"-"+result.fname} </option>
    })}
   
</select>
     <input style={{marginLeft:"5%"}} type="submit" value="submit" class="button" onClick={update}  />


</div>
</center>
)
}
