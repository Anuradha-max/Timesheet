import React,{useState,useEffect } from 'react';
import Axios from 'axios';
import { BsTrash } from "react-icons/bs";


const TaskListEdit = props => {
    const [WeekDate]=useState(props.WeekDate)
    localStorage.setItem("WeekDate",WeekDate)
  
   const [ClientData,setClientData]=useState([])
   let Client=[];
  
   
   useEffect(()=>{
    
    Project();
   
    
  },[])
  //console.log("Login Id",localStorage.getItem("LoginId"))
  
  const Project = ()=>{
   
   Axios.get("http://localhost:3001/ClientSelect", {
     params:{
   a:localStorage.getItem("LoginId"),
     }
   }).then((response)=>{
    setClientData(response.data)
  //   alert(response.data[0].Client)
  
   }
  )
   }
  
    return props.taskList.map((val,idx) => {
      
          return (
            
            
               <tr key={val.index}>
                  <td>
                  <i style={{paddingLeft:"7px"}} onClick={() => props.delete(idx)}><BsTrash style={{height:"25px",width:"30px"}}/></i>
                  </td>
                 <td>
                 <select name="Client" className="timesheet-select" onChange={e => props.changes("Client", e.target.value, idx)} required>
         {val.Client===""?
         <option value="">Choose Option</option>
         :''}
           
             { Client=[]}
          
           
            
            {ClientData.map((result) =>{
  if(!Client.includes(result.Client))
  {
    Client.push(result.Client)
 
  
    // return <option value={result.Client}>{result.Client}</option>
  }
    
  
  })}
  
   {Client.map((result) =>{

  if(result===val.Client)
  {
 
    //console.log("Client",Client)
     return <option value={result}>{result}</option>
  }
    
  
  })}
   {Client.map((result) =>{
     //console.log("Client",Client)
  if(result!==val.Client)
  {
  
 
  
     return <option value={result}>{result}</option>
  }
    
  
  })}
  

  
  
  </select>
              
                 </td>
                 <td>
                 <select name="Project" className="timesheet-select"  onChange={e => props.changes("Project", e.target.value, idx)} required>
                 {val.Project===""?
         <option value="">Choose Option</option>
         :''}
  
               {ClientData.map((result) =>{
              if(val.Client===result.Client&&result.Project===val.Project)
              {
              
                 return <option value={result.Project} >{result.Project}</option>
              }
              })}
                 {ClientData.map((result) =>{
              if(val.Client===result.Client&&val.Project!==result.Project)
              {
              
                 return <option value={result.Project} >{result.Project}</option>
              }
              })}
              
              </select>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Sunday" value={val.Sunday} pattern="[0-9]*" disabled={props.sun} onChange={e => props.changes("Sunday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt1" value={val.Cmt1} placeholder="Enter Comments" disabled={props.sun}  onChange={e => props.changes("Cmt1", e.target.value, idx)}/>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Monday" value={val.Monday} pattern="[0-9]*" disabled={props.mon} onChange={e => props.changes("Monday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt2" value={val.Cmt2} placeholder="Enter Comments" disabled={props.mon}   onChange={e => props.changes("Cmt2", e.target.value, idx)}/>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Tuesday" value={val.Tuesday} pattern="[0-9]*" disabled={props.tue}  onChange={e => props.changes("Tuesday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt3" value={val.Cmt3} placeholder="Enter Comments" disabled={props.tue} onChange={e => props.changes("Cmt3", e.target.value, idx)}/>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Wednesday" value={val.Wednesday} pattern="[0-9]*" disabled={props.wed} onChange={e => props.changes("Wednesday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt4" value={val.Cmt4} placeholder="Enter Comments" disabled={props.wed} onChange={e => props.changes("Cmt4", e.target.value, idx)}/>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Thursday" value={val.Thursday} pattern="[0-9]*" disabled={props.thu} onChange={e => props.changes("Thursday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt5" value={val.Cmt5} placeholder="Enter Comments" disabled={props.thu}  onChange={e => props.changes("Cmt5", e.target.value, idx)}/>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Friday" value={val.Friday} pattern="[0-9]*" disabled={props.fri} onChange={e => props.changes("Friday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt6" value={val.Cmt6} placeholder="Enter Comments" disabled={props.fri}   onChange={e => props.changes("Cmt6", e.target.value, idx)}/>
                 </td>
                 <td>
                   <input type="text" class="hours"  placeholder="Hrs" id="Saturday" value={val.Saturday} pattern="[0-9]*" disabled={props.sat}  onChange={e => props.changes("Saturday", e.target.value, idx)}/>
                   <input type="text" class="comments" id="cmt7" value={val.Cmt7} placeholder="Enter Comments" disabled={props.sat} onChange={e => props.changes("Cmt7", e.target.value, idx)}/>
                 </td>
             
                  
               </tr>
  
         );
        });
   
      
  };
  export default TaskListEdit