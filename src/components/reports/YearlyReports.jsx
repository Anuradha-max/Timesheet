import React from 'react';
import Header from '../header/header.jsx'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

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
       let AllData="";
     EmployeeId.forEach((i) => {
       let Emp=[];
       Emp=Employee[i].split("-");
       
         let uname=Emp[0]
         let line="";
         let Data="";
        
        // console.log(uname)
       //  console.log(Employee[i])
     const RYear=localStorage.getItem("RYear")
     let Client=[];
     const ClientProject=[];
     let c=0;
     let Response=[];
     //console.log("Response",Response.data.length)
        let Monthly="Jan"+","+"Feb"+","+"Mar"+","+"Apr"+","+"May"+","+"Jun"+","+"Jul"+","+"Aug"+","+"Sep"+","+"Oct"+","+"Nov"+","+"Dec";
        let Month=[]
          Month=Monthly.split(",");
     
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
     const Date=response.data[j].Date.substring(7,11)
     
     let key=response.data[j].Client+","+response.data[j].Project
     
     if(response.data[j].UserId===uname&&Date===RYear)
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
     
    
     
     let arr=[];
     arr=Client[cli].split(",")
     //console.log("Client",arr[0])
    
     
     let Months=[];
     let Total=0;
     
     for(var k=0;k<12;k++){
     
     let total=0;
    
    for(var l=0;l<Response.length;l++)
    {
     let Day01=0;
     let Day02=0;
     let Day03=0;
     let Day04=0;
     let Day05=0;
     let Day06=0;
     let Day07=0;
         let t=0;
        // console.log(arr[0]+","+uname+","+Month[k]+","+response.data[l].Date.substring(0,3)+","+arr[1])
         if(response.data[l].UserId===uname&&response.data[l].Date.substring(0,3)===Month[k]&&arr[0]===response.data[l].Client&&arr[1]===response.data[l].Project)
         {
         // console.log(uname+","+arr[0]+","+arr[1]+","+response.data[l].Date)
          Day01=Day01+parseInt(response.data[l].Sunday)
          Day02=Day02+parseInt(response.data[l].Monday)
          Day03=Day03+parseInt(response.data[l].Tuesday)
          Day04=Day04+parseInt(response.data[l].Wednesday)
          Day05=Day05+parseInt(response.data[l].Thursday)
          Day06=Day06+parseInt(response.data[l].Friday)
          Day07=Day07+parseInt(response.data[l].Saturday)
          t=Day01+Day02+Day03+Day04+Day05+Day06+Day07;
        //  console.log("t",t)
     }
     
        total=total+t;
      //  console.log("total",total)
   
     
     
     
         }
         Months[k]=total+","; 
         Total=Total+total
   
         //console.log("months",Months[0])
         line=uname+","+Emp[1]+","+arr[0]+","+arr[1]+","+RYear+",";
         String=Months[0]+Months[1]+Months[2]+Months[3]+Months[4]+Months[5]+Months[6]+Months[7]+Months[8]+Months[9]+Months[10]+Months[11];
    
         //console.log("yealy string:",String)
       //console.log("yearly line: ",line)
       }
      
      
        
    
     Data=Data+line+String+Total+"^";
      //console.log("yearly data: ",Data)
         
     
     
     
     
     
     
     
     })
     AllData=AllData+Data;
     
     } )
     this.setState({concat:AllData})
     //console.log("concat",this.state.concat)
      //console.log("len",this.state.concat.length)	
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
}
)
    
    
})
    }
    render(){
        let {concat1}=this.state;
return(
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
<th>Year</th>
<th>JAN</th>
<th>FEB</th>
<th>MAR</th>
<th>APR</th>
<th>MAY</th>
<th>JUN</th>
<th>JUL</th>
<th>AUG</th>
<th>SEP</th>
<th>OCT</th>
<th>NOV</th>
<th>DEC</th>
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
filename="YearlyReportsExcel"
sheet="Sheet"
buttonText="Download" />
</div><br/>
</form>
</div>
);

    }
}

export default Reports;
    