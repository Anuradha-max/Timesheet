import React from 'react';
import Header from '../header/header.jsx'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import Moment from 'moment';
import moment from 'moment';

const ProjectReports = props => {

return props.taskList.map((val,idx) => {

return (


<tr key={val.index}>

<td>

{val.UserId}
</td>
<td>
{val.Client}
</td>
<td>
{val.Project}
</td>
<td>
{val.NoOfHours}
</td>
<td>
{val.PStartDate}
</td>
<td>
{val.PEndDate}
</td>
<td>
{val.Resources}
</td>

</tr>

);

})

};
class Reports extends React.Component {

state = {
concat1:[],
concat:[],

};


componentDidMount()
{
 let Fname="";
  axios.get("http://localhost:3001/TimeSheetReports",{
}).then((response)=>{
  let Arr=[0,1,2,3,4,5]
  let LoginId = localStorage.getItem('LoginId');
  axios.get("http://localhost:3001/User",{}).then((response1)=>{
    for(var i=0;i<response1.data.length;i++)
    {
if(LoginId===response1.data[i].uid)
{
  Fname=response1.data[i].fname;
}}
  
  //console.log("Fname",Fname);

  let ReportUsers=localStorage.getItem("ReportUsers")
//console.log(ReportUsers);
let Employee=[];
let EmployeeId=[];
if(ReportUsers==="")
{
  ReportUsers=LoginId+"-"+Fname;
}
 Employee=ReportUsers.split(",");
 let EmployeeLength=Employee.length;
 //console.log("Employeelen",Employee)
 for(i=0;i<EmployeeLength;i++)
{
    EmployeeId.push(i)
}
  //console.log("Employee",EmployeeId)
  let String="";
EmployeeId.forEach((i) => {
  let Emp=[];
  Emp=Employee[i].split("-");
    let user=[];
    let uname=Emp[0]
    let line="";
 
   // console.log(uname)
  //  console.log(Employee[i])
const RYear=localStorage.getItem("RYear")
const RMonth=localStorage.getItem("RMonth")
let RDay=1
const YEAR=RYear+"-"+RMonth;
const myDate=RYear+"-"+RMonth+"-"+RDay;
var DateFormat=   Moment(myDate).format('ddd MMM,yyyy')
var Week1=   Moment(myDate).format('MMM DD yyyy')
const Week=DateFormat.substring(4,12)
var NoOfDays=Moment(YEAR, "YYYY-MM").daysInMonth();
var Day= Moment(myDate).isoWeekday()

//console.log("DateFormat",Day )
let Client=[];
const ClientProject=[];
let c=0;
let Response=[];
//console.log("Response",Response.data.length)


if(response)
{ 

//console.log("response",response)
for(var j=0;j<response.data.length;j++)
{
Response.push(j);
}
//  console.log(Response)
Response.forEach((j)=>
{
//console.log(response.data[j].UserId)
const Date=response.data[j].Date.substring(0,3)+","+response.data[j].Date.substring(7,11)
// console.log("Date",Date);
// console.log("Week",Week);
let key=response.data[j].Client+","+response.data[j].Project
//console.log(response.data[j].UserId)
// console.log(Employee[i])
if(response.data[j].UserId===uname&&Date===Week)
{
// console.log(key)
// console.log("Hello")
if(!ClientProject.includes(key))
{

    
   ClientProject[j]=key;
  // console.log("ClentProject",ClientProject);
   Client[c]=response.data[j].Client+","+response.data[j].Project;
   c++;
  // console.log("Client",Client)

}
}


})
}



 let ProjectClient=[];

for(i=0;i<Client.length;i++)
{
ProjectClient.push(i);
}
//console.log(Client);
//console.log(ProjectClient)
ProjectClient.forEach((cli)=>{

Week1=   Moment(myDate).format('MMM DD yyyy')
//console.log("Week1",Week1)

Day= Moment(myDate).isoWeekday()

let arr=[];
arr=Client[cli].split(",")
//console.log("Client",arr[0])
let WeekDays="";
user=[]
Arr.forEach((k)=>{
let countj=0;
let Day01=0;
let Day02=0;
let Day03=0;
let Day04=0;
let Day05=0;
let Day06=0;
let Day07=0;
//console.log(cli,",",k)

  Response.forEach((l)=>
  {
 //   console.log(cli+","+k+","+l);
   // WeekDays="";
    //console.log(Day)
 //  console.log(uname)
    if(response.data[l].UserId===uname&&response.data[l].Date===Week1&&arr[0]===response.data[l].Client&&arr[1]===response.data[l].Project)
    {
      countj=1;
      if(k===0)
      {
        
      if(Day===7)
          {
    Day01=response.data[l].Sunday;
    Day02=response.data[l].Monday;
    Day03=response.data[l].Tuesday;
    Day04=response.data[l].Wednesday;
    Day05=response.data[l].Thursday;
    Day06=response.data[l].Friday;
    Day07=response.data[l].Saturday;
              WeekDays=response.data[l].Sunday+","+response.data[l].Monday+","+response.data[l].Tuesday+","+response.data[l].Wednesday+","+response.data[l].Thursday+","+response.data[l].Friday+","+response.data[l].Saturday
          //   console.log("WeekDays",WeekDays)

}
else if(Day===1)
{
    Day02=response.data[l].Monday;
    Day03=response.data[l].Tuesday;
    Day04=response.data[l].Wednesday;
    Day05=response.data[l].Thursday;
    Day06=response.data[l].Friday;
    Day07=response.data[l].Saturday;
  WeekDays=response.data[l].Monday+","+response.data[l].Tuesday+","+response.data[l].Wednesday+","+response.data[l].Thursday+","+response.data[l].Friday+","+response.data[l].Saturday
 // console.log("WeekDays",WeekDays)
}
else if(Day===2)
{
    Day03=response.data[l].Tuesday;
    Day04=response.data[l].Wednesday;
    Day05=response.data[l].Thursday;
    Day06=response.data[l].Friday;
    Day07=response.data[l].Saturday;
  WeekDays=response.data[l].Tuesday+","+response.data[l].Wednesday+","+response.data[l].Thursday+","+response.data[l].Friday+","+response.data[l].Saturday
  //console.log("WeekDays",WeekDays)
}
else if(Day===3)
{
    Day04=response.data[l].Wednesday;
    Day05=response.data[l].Thursday;
    Day06=response.data[l].Friday;
    Day07=response.data[l].Saturday;
  WeekDays=response.data[l].Wednesday+","+response.data[l].Thursday+","+response.data[l].Friday+","+response.data[l].Saturday
 // console.log("WeekDays",WeekDays)
}
else if(Day===4)
{
    Day05=response.data[l].Thursday;
    Day06=response.data[l].Friday;
    Day07=response.data[l].Saturday;
    WeekDays=response.data[l].Thursday+","+response.data[l].Friday+","+response.data[l].Saturday
//  console.log("WeekDays",WeekDays)
//  console.log(arr[0])
}
else if(Day===5)
{
Day06=response.data[l].Friday;
Day07=response.data[l].Saturday;
WeekDays=response.data[l].Friday+","+response.data[l].Saturday
//   console.log("WeekDays",WeekDays)
}
else if(Day===6)
{
Day07=response.data[l].Saturday;
WeekDays=response.data[l].Saturday
 //console.log("WeekDays",WeekDays)
}

}
if(k>0)
{
    Day01=response.data[l].Sunday;
    Day02=response.data[l].Monday;
    Day03=response.data[l].Tuesday;
    Day04=response.data[l].Wednesday;
    Day05=response.data[l].Thursday;
    Day06=response.data[l].Friday;
    Day07=response.data[l].Saturday;
    WeekDays=response.data[l].Sunday+","+response.data[l].Monday+","+response.data[l].Tuesday+","+response.data[l].Wednesday+","+response.data[l].Thursday+","+response.data[l].Friday+","+response.data[l].Saturday
//console.log("WeekDays",WeekDays)
//console.log(arr[0])
}
}


else{
// console.log(k)
// console.log(Day)
// console.log(arr[0])
if(k===0&&countj===0)
{
    countj=1;
    if(Day===7)
    {
        WeekDays=Day01+","+Day02+","+Day03+","+Day04+","+Day05+","+Day06+","+Day07;
    }
    if(Day===1)
{
WeekDays=Day02+","+Day03+","+Day04+","+Day05+","+Day06+","+Day07;
//console.log("WeekDays",WeekDays)
//console.log(arr[0])


}
if(Day===2)
{
WeekDays=Day03+","+Day04+","+Day05+","+Day06+","+Day07;

}
if(Day===3)
{
WeekDays=Day04+","+Day05+","+Day06+","+Day07;

}
if(Day===4)
{

WeekDays=Day05+","+Day06+","+Day07;

//console.log("WeekDays",WeekDays)
//console.log(arr[0])


}
if(Day===5)
{
WeekDays=Day06+","+Day07;
// comment=Cmt6h+","+Cmt7h;
}
if(Day===6)
{
WeekDays=WeekDays+Day07;
// comment=Cmt6h+","+Cmt7h;
//console.log("WeekDays",WeekDays)
}

}
}
 })
 
line=uname+","+Emp[1]+","+arr[0]+","+arr[1]+","+Moment(YEAR).format('MMM yyyy');
if(WeekDays==="")
{
WeekDays=Day01+","+Day02+","+Day03+","+Day04+","+Day05+","+Day06+","+Day07;
//console.log("Hello");

}
if(k===0)
{
 // console.log("WeekDays",WeekDays)
user=WeekDays+",";
   // console.log(arr[0])
   // console.log(Week1)
    //console.log(WeekDays)
// alert(WeekDays)
//user=WeekDays;
RDay=8-Day;
//  console.log("user",user)
 Week1= Moment(RYear+"-"+RMonth+"-"+RDay).format('MMM DD yyyy')
 Day= Moment(RYear+"-"+RMonth+"-"+RDay).isoWeekday()
//console.log("if k==0Weekly",Week1);
}
else{
 // WeekDays=WeekDays+WeekDays+",";
 // console.log("Weekays",WeekDays)
 user=user+Day01+","+Day02+","+Day03+","+Day04+","+Day05+","+Day06+","+Day07+",";
     //console.log("user123",user)
      RDay=RDay+7;
      Week1=   Moment(RYear+"-"+RMonth+"-"+RDay).format('MMM DD yyyy')
    //  console.log("Weekly",Week1);
  

 
}
})
let use=[];
let user12=[];
use=user.split(",");
let total=0;
for(var i=0;i<NoOfDays;i++)
{
  user12.push(use[i]);
  total=total+parseInt((use[i]))
}
String=String+line+","+user12+","+total+"^";
//console.log("use",use)
this.setState({
  concat:String});


})

} )
let concat2=[];
//console.log(this.state.concat,"concat")
//console.log(this.state.concat.length,"concatlen")
//console.log(concat,"concat")
//console.log("len",concat.length)
if(this.state.concat.length>0)
{
this.setState({concat:this.state.concat.substring(0,this.state.concat.length-1)})

let Array=[];

let fil=[];
fil=this.state.concat.split("^")
//console.log(fil,"fil")
for(i=0;i<fil.length;i++)
{


 Array=fil[i].split(",")
 

 //console.log("con",Array.length)


 concat2.push(Array);
}
}
this.setState({concat1:concat2})

//console.log(concat2,"concat1")
}) 
})}
render() {

var NoOfDays=[];
let {concat1}=this.state;



const RYear=localStorage.getItem("RYear")
  const RMonth=localStorage.getItem("RMonth")
 
  const YEAR=RYear+"-"+RMonth;
 
  var Days=Moment(YEAR, "YYYY-MM").daysInMonth();
  for(var i=1;i<=Days;i++)
  {
      NoOfDays.push(i);
   
  }
 

const List=NoOfDays.map(product => <th key={product}>Day{product}</th>)



return (
 
<div>

< Header/>



<form>

<br/><br/><br/><br/>

<div class="Tcontainer">
<table id="Project" className="table" width="100%" >
<thead>
<tr>

<th>UserId</th>
<th>UserName</th>
<th>Client</th>
<th>Project</th>
<th>Month/Year</th>
{List}
<th>Total Hours</th>


</tr>
</thead>
<tbody >
{concat1.map((rows) => {
        var row = rows.map((cell) => <td>{cell} </td>);
        return (
          <>
            <tr>{row}</tr>
           
          </>
        );
      })}

</tbody>

</table><br/>
<ReactHTMLTableToExcel
className="btn btn-info"
table="Project"
filename="MonthlyReportsExcel"
sheet="Sheet"
buttonText="Download" />
</div><br/>
</form>

</div>
);

}
}

export default Reports;