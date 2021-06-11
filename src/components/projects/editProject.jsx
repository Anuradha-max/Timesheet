import React,{useState,useEffect} from "react";
import Header from '../header/header.jsx'
import Axios from 'axios';
import { BsTrash } from "react-icons/bs";
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';


const TaskList = props => {
  const [Resourcesreg,setResources]=useState([])
  const [value,setValue]=useState('');
  useEffect(()=>{
    idsdropdown();
    //console.log("Update Request")
  },[])
  
  const idsdropdown = ()=>{
 Axios.get("http://localhost:3001/idsdropdown", {

  }).then((response)=>{
    
    setResources(response.data) ;
  
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
                 <input type="text" className="Client" required readOnly value={val.Client}  onChange={e => props.changes("Client", e.target.value, idx)}/>
               </td>
               <td>
                 <input type="text" className="projectName" required readOnly value={val.Project} onChange={e => props.changes("Project", e.target.value, idx)}/>
               </td>
               <td>
                 <input type="text" class="hours" placeholder="Hrs" id="NoOfHours"pattern="[0-9]*" value={val.NoOfHours} onChange={e => props.changes("NoOfHours", e.target.value, idx)}/>
                
               </td>
               <td>
                 <input type="date" class="PStartDate" id="PStartDate" value={val.PStartDate} onChange={e => props.changes("PStartDate", e.target.value, idx)}/>
             
               </td>
               <td>
                 <input type="date" class="PEndDate" id="PEndDate" value={val.PEndDate} onChange={e => props.changes("PEndDate", e.target.value, idx)}/>
             
               </td>
               <td>
               <select name="id" className="reports-request-select" placeholder="select an option" required  value={value} onChange={(e) => setValue(e.target.value)} required>
 

 {Resourcesreg.map((result) =>{
   return <option value={result.uid} >{result.uid+"-"+result.fname} </option>
})}

</select>&nbsp;&nbsp;
                 <input type="text" class="Resources" id="Resources" value={val.Resources} onChange={e => props.changes("Resources", e.target.value, idx)}/>
               
               </td>
              
               
                
             </tr>

       );
      });
 
    
};
class editProject extends React.Component {
 state = {
      taskList: [{
        index: new Date().getTime(),
        Client:"", 
        Project:"",
        NoOfHours: "",
        PStartDate: "",
        PEndDate: "",
        Resources: ""
      }]
  };

  

  
  clickOnDelete=(index)=> {
    
    //console.log("ids"+index)
const allItems = [...this.state.taskList];
allItems.splice(index,1);

//console.log("idx123"+item);

this.setState({

// taskList: this.state.taskList.filter(r => r !== index),
taskList: allItems
 
 });


}

handleChanges = (propertyName, Data, index) => {
const allItems = this.state.taskList;
let item = allItems[index];
//console.log("item:"+item)
item[propertyName] = Data;
allItems[index] = item;
//console.log("allitems"+allItems[0].Client);

this.setState({
taskList: allItems
});

//console.log("inside", propertyName, Data, index);
//console.log("TaskList",this.state.taskList);
};

handleSubmit = e => {
  e.preventDefault();
 
 Axios.post("http://localhost:3001/editProject",{
     taskList: this.state.taskList,
      id:localStorage.getItem('LoginId'),
      ProjectClient:localStorage.getItem("ClientProjectName"),
      
      }).then(res => {
        if(res.data.message) {alert(res.data.message)
          this.props.history.push('/editProjectRequest')
        }
           
     
          else{

      
           // NotificationManager.success("Saved")
           this.props.history.push('/editProjectRequest')
            
       
            }
        
       
      });
      };
    
      
    
    
    // res = await axios.get('https://httpbin.org/get?answer=42');
       
     componentDidMount()
     {
      Axios.get("http://localhost:3001/ProjectSelect",{
        params:{
               a: localStorage.getItem("ClientProjectName"),
              
        }
       
    }).then((response)=>{
        if(response)
        {
     
    //console.log(response);
    this.setState({
    
      taskList: response.data,
      
  
        })
   
  
  
   
  }}
    )
  
     }
   
  
  
  
  render() {
      const uid=localStorage.getItem("ClientProjectName")
          let { taskList } = this.state;
   
 


 


    
      return (
         
          <div>
              <Header />
            
              <form onSubmit={this.handleSubmit}>
            
    
          <br/><br/><br/><br/>
        <h1>  <NotificationContainer /></h1>
                   <div class="Tcontainer">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th className="Delete">Delete</th>
                                          <th className="required">Client</th>
                                          <th className="required">ProjectName</th>
                                          <th className="TotalHours">TotalHours</th>
                                          <th className="PStartDate">PStartDate</th>
                                          <th className="PEndDate">PEndDate</th>
                                          <th className="Resources">Resources</th>
                                          
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <TaskList
                                          delete={this.clickOnDelete.bind(this)}
                                          changes={this.handleChanges.bind(this)}
                                          taskList={taskList}
                                          uid1={uid}
                                      />
                                  </tbody>
                                  </table>
                                  </div><br/>
                                  <div class="button">
                                    
                                            {/* <button
                                                  onClick={this.addNewRow}
                                                  type="button"
                                                  align="left"
                                                  className="btn btn-primary text-center"
                                              >
                                                  Add row
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                                              </button> */}
                                              <button type="submit" className="btn btn-primary text-center">
                  Save
                </button>
              </div>
                  </form>                    
              </div>

                             
                        

      );

  }
}

export default editProject;
