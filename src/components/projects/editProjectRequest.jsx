
import React,{useState,useEffect } from 'react';
import Axios from 'axios';
import Header from '../header/header.jsx'
import {useHistory} from 'react-router-dom';

export default function EditProjectRequest (){
    const [ClientProject,setClientProject]=useState([])
    const [value,setValue]=useState('');
    localStorage.setItem('myuserid', value);
    const history = useHistory();
   localStorage.setItem("ClientProjectName",value);
   useEffect(()=>{
    idsdropdown();
    //console.log("Update Request")
  },[])
  
  const idsdropdown = ()=>{
   Axios.post("http://localhost:3001/EditProjectRequest", {

    }).then((response)=>{
      setClientProject(response.data);
    
    }
    )
  }
    const handleSubmit=()=>{  
      if(value !== ''){
        localStorage.setItem('myuserid', value)
        //console.log("request")
        history.push('/editProject')
        
      }else{
        alert("value not null!!");
      }
      
    
  
  
    
   
}
    
      
    
          
          
      
                
  
return (
  
  <center>
  <div >  
 
 <Header />
</div>
<div >

<br></br>
  <h2>UPDATE PROJECT</h2>
  <form>
<select name="id" className="reports-request-select" placeholder="select an option"  value={value}
        onChange={(e) => setValue(e.target.value)} > 
   <option value="">Choose Option</option> 
      {ClientProject.map((result) =>{
    

       
       var content=   <option 
           value={result.Client+","+result.Project} >{result.Client+"-"+result.Project} </option>
          
         
           return content; 
        
    })}
   
</select>     

<input style={{marginLeft:"5%"}} type="submit" value="submit" class="button" onClick={handleSubmit} />


</form>
</div>
</center>
)
}
