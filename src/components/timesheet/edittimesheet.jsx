import React from 'react';
import Header from '../header/header.jsx'
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';
import Axios from 'axios';
import Moment from 'moment';
import TaskListEdit from './TaskListEdit';
import TaskListSubmit from './TaskListSubmit';
import TaskListCreate from './TaskListCreate';


//let k=localStorage.getItem("k");

class Form extends React.Component {
  
  

  state = {
      taskList: [{ 
      index: new Date().getTime(), 
      Client:"",
      Project:"",
      Sunday: 0,
      Cmt1: "",
      Monday: 0,
      Cmt2: "",
      Tuesday: 0,
      Cmt3: "",
      Wednesday: 0,
      Cmt4: "",
      Thursday: 0,
      Cmt5: "",
      Friday: 0,
      Cmt6: "",
      Saturday: 0,
      Cmt7: ""}],
      Submit:"",
      k:0,
      
  };

  

  addNewRow = () => {
    if(this.state.k===0)
    {
    let values = {
      index: new Date().getTime(), 
      Client:"",
      Project:"",
      Sunday: 0,
      Cmt1: "",
      Monday: 0,
      Cmt2: "",
      Tuesday: 0,
      Cmt3: "",
      Wednesday: 0,
      Cmt4: "",
      Thursday: 0,
      Cmt5: "",
      Friday: 0,
      Cmt6: "",
      Saturday: 0,
      Cmt7: "",
    };
  
    this.setState(prevState => ({
      taskList: [...prevState.taskList, values]
    }));
  };
  if(this.state.k===1)
  {
  let values = {
    index: new Date().getTime(), 
    Client:"",
    Project:"",
    Sunday: "",
    Cmt1: "",
    Monday: "",
    Cmt2: "",
    Tuesday: "",
    Cmt3: "",
    Wednesday: "",
    Cmt4: "",
    Thursday: "",
    Cmt5: "",
    Friday: "",
    Cmt6: "",
    Saturday: "",
    Cmt7: "",
  };


  this.setState(prevState => ({
    taskList: [...prevState.taskList, values]
  }));
};
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
    console.log("allitems",allItems);
   
    this.setState({
      taskList: allItems
    });

    //console.log("inside", propertyName, Data, index);
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log("Submit",e.target.value)
   
      Axios.post("http://localhost:3001/edittimesheet",{
       taskList: this.state.taskList,
        id:localStorage.getItem('LoginId'),
        myDate:localStorage.getItem("WeekDate"),
        Submit:1
        }).then((response)=>{
          if(response.data.message) {
           alert(response.data.message)
            //NotificationManager.success(response.data.message)
        //  this.setState({redirect:"/header"})
       // window.history.push('/register')
         this.props.history.push('/Header')
         // console.log("helloooo");
          }
       
            else{
  
     
           //   NotificationManager.success("Saved")
           //  window.history.push('/TimesheetPage')
           this.props.history.push('/Header')
         
              }
          
         
        });
        };
       
        componentDidMount()
        {
         
          Axios.get("http://localhost:3001/TimeSheetSelect",{
            params:{
                   a:localStorage.getItem("LoginId"),
                   myDate:localStorage.getItem("WeekDate"),
                   submit:localStorage.getItem("Submit"),
                  
            }
           
        }).then((response)=>{
 
  for(var i=0;i<response.data.length;i++)
  {
    if(response.data[i].UserId===localStorage.getItem("LoginId")&&response.data[i].Date===localStorage.getItem("WeekDate"))
    {
      this.setState({k:1})
    
    }
    if(response.data[i].UserId===localStorage.getItem("LoginId")&&response.data[i].Date===localStorage.getItem("WeekDate")&&response.data[i].Submit==="0")
    {
      this.setState({k:2})
      NotificationManager.success("Data is not Editable")
    }
  }
  if(response.data.length>0)
  {
  this.setState({
        
    taskList: response.data
    

      })
    }
    //alert(response.data[0].Client)
     }
         )
          
    }
    Sub=(e)=>{
      //console.log("Submit",e.target.value)
      Axios.post("http://localhost:3001/edittimesheet",{
        taskList: this.state.taskList,
         id:localStorage.getItem('LoginId'),
         myDate:localStorage.getItem("WeekDate"),
         Submit:e.target.value,
         }).then((response)=>{
           if(response.data.message) {
            alert(response.data.message)
           //  NotificationManager.success(response.data.message)
         //  this.setState({redirect:"/header"})
        // window.history.push('/register')
          this.props.history.push('/Header')
          // console.log("helloooo");
           }
        
             else{
   
      
            //   NotificationManager.success("Saved")
            //  window.history.push('/TimesheetPage')
            this.props.history.push('/Header')
          
               }
           
          
         });
    }
   
   

  render() {
   
      
     
      var myDate = localStorage.getItem("myDate");
     
      //console.log("id"+id);
      //console.log("myDate"+myDate);
      
      let { taskList } = this.state;
      let {k}=this.state;

      var CurrentDate = new Date(new Date(parseInt(myDate.substring(0,4)), parseInt(myDate.substring(5,7))-1, parseInt(myDate.substring(8,10))));
    
      var CurrentWeekDay = CurrentDate.getDay();
      
      var CurrentWeekDate = new Date(
          new Date(CurrentDate).setDate(CurrentDate.getDate() - CurrentWeekDay)
      );

      var Day1 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 0)).toDateString();
      var Day1_str = Day1.substring(0, 4) + Day1.substring(8, 11);

      var Day2 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 1)).toDateString();
      var Day2_str = Day2.substring(0, 4) + Day2.substring(8, 11);

      var Day3 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 2)).toDateString();
      var Day3_str = Day3.substring(0, 4) + Day3.substring(8, 11);

      var Day4 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 3)).toDateString();
      var Day4_str = Day4.substring(0, 4) + Day4.substring(8, 11);

      var Day5 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 4)).toDateString();
      var Day5_str = Day5.substring(0, 4) + Day5.substring(8, 11);

      var Day6 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 5)).toDateString();
      var Day6_str = Day6.substring(0, 4) + Day6.substring(8, 11);

      var Day7 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 6)).toDateString();
      var Day7_str = Day7.substring(0, 4) + Day7.substring(8, 11);

      var start_Date = Day1.substring(4,15);
      var end_Date = Day7.substring(4,15);
     
      //below code used for disable hour fields as per the given month
      var gmonth = CurrentDate.toDateString().substring(3, 7);//Selected Day Month
      var sun, mon, tue, wed, thu, fri, sat;
      sun=mon=tue=wed=thu=fri=sat= false;

      if(!Day1.includes(gmonth))
          sun = true;
      
      if(!Day2.includes(gmonth))
          mon = true;

      if(!Day3.includes(gmonth))
          tue = true;

      if(!Day4.includes(gmonth))
          wed = true;

      if(!Day5.includes(gmonth))
          thu = true;

      if(!Day6.includes(gmonth))
          fri = true;

      if(!Day7.includes(gmonth))
          sat = true;
         
       var t=   Moment(myDate).format('MMM DD yyyy')
       var CurrentMon=t.substring(0,3)
       var Sunday=   Moment(Day1).format('MMM DD yyyy')
       var Monday=   Moment(Day2).format('MMM DD yyyy')
       var Tuesday=   Moment(Day3).format('MMM DD yyyy')
       var Wednesday=   Moment(Day4).format('MMM DD yyyy')
       var Thursday=   Moment(Day5).format('MMM DD yyyy')
       var Friday=   Moment(Day6).format('MMM DD yyyy')
       var Saturday=   Moment(Day7).format('MMM DD yyyy')
	
       var WeekDate="";
       //console.log("sun:"+Sunday)
       if(Sunday.includes(CurrentMon))
       {
         
         WeekDate=Sunday;
       }
       else if(Monday.includes(CurrentMon))
       {
         
         WeekDate=Monday;
       }
       else if(Tuesday.includes(CurrentMon))
       {
         
         WeekDate=Tuesday;
       }
       else if(Wednesday.includes(CurrentMon))
       {
         
         WeekDate=Wednesday;
       }
       else if(Thursday.includes(CurrentMon))
       {
         
         WeekDate=Thursday;
       }
       else if(Friday.includes(CurrentMon))
       {
         
         WeekDate=Friday;
       }
       else if(Saturday.includes(CurrentMon))
       {
         
         WeekDate=Saturday;
       }
       //console.log("bef WeekDate:"+WeekDate);
    //  WeekDate=   Moment(WeekDate).format('yyyy-MM-DD')
// console.log("calen:"+CurrentMon);
// console.log("WeekDate:"+WeekDate);
// console.log("sun:"+sun+"mon"+mon+"tue"+tue+"wed"+wed+"thu"+thu);



      return (
         
          <div>
         
        < Header/>
    
     <form onSubmit={this.handleSubmit1}>
          <br/><br/><br/><br/>
          <div class="weekDate">{start_Date} To {end_Date}&nbsp;&nbsp;
          {k===1?
            
                                     
              <button type="button" name="Submit" value="0" className="btn btn-primary text-center" onClick={this.Sub}>
                Submit
              </button>
          :''}</div><br/><br/>
          </form>
             <form onSubmit={this.handleSubmit}>
      <div class="Tcontainer">
      <NotificationContainer /><br/>
                              <table className="table">
                                  <thead>
                                      <tr>
                                        {k!==2?
                                          <th className="Delete">Delete</th>
                                          :''}
                                          <th className="required">Client</th>
                                          <th className="required">Project</th>
                                          <th id="Day1">{Day1_str}</th>
                                          <th id="Day2">{Day2_str}</th>
                                          <th id="Day3">{Day3_str}</th>
                                          <th id="Day4">{Day4_str}</th>
                                          <th id="Day5">{Day5_str}</th>
                                          <th id="Day6">{Day6_str}</th>
                                          <th id="Day7">{Day7_str}</th>
                                      </tr>
                                  </thead>
                                  {k===1?
                                  <tbody >
                                  <TaskListEdit
                                            delete={this.clickOnDelete.bind(this)}
                                            changes={this.handleChanges.bind(this)}
                                            taskList={taskList} sun={sun} mon={mon} tue={tue} wed={wed} thu={thu} fri={fri} sat={sat}
                                            WeekDate={WeekDate}


                                      
                                      />
                                  </tbody>
                                  :''}
                                    {k===0?
                                  <tbody >
                                  <TaskListCreate
                                            delete={this.clickOnDelete.bind(this)}
                                            changes={this.handleChanges.bind(this)}
                                            taskList={taskList} sun={sun} mon={mon} tue={tue} wed={wed} thu={thu} fri={fri} sat={sat}
                                            WeekDate={WeekDate}


                                      
                                      />
                                  </tbody>
                                  :''}
                                    {k===2?
                                    
                                  <tbody >
                                  <TaskListSubmit
                                            delete={this.clickOnDelete.bind(this)}
                                            changes={this.handleChanges.bind(this)}
                                            taskList={taskList} sun={sun} mon={mon} tue={tue} wed={wed} thu={thu} fri={fri} sat={sat}
                                            WeekDate={WeekDate}


                                      
                                      />
                                  </tbody>
                                  :''}
                                  </table>
                                  </div><br/>
                                  {k!==2?
                                  <div class="button">
                                  
                                              <button
                                                  onClick={this.addNewRow}
                                                  type="button"
                                                  className="btn btn-primary text-center"
                                              >
                                                  Add row
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                                              </button>&nbsp;&nbsp;
                                     
                <button type="submit" className="btn btn-primary text-center">
                  Save
                </button>
             
              </div>
  :""}
                </form>                      
              </div>

                             
                        

      );

  }
}

export default Form;
