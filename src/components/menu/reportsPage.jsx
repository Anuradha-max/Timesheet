import React,{ useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import Header from "../header/header";

var users;
var years = [];



const ReportsRequestPage = () => {

    const history = useHistory();
   
    //console.log("projectrequest")
    const [reportType,setReportType] = useState('');
    const [user,setUser] = useState('');
    const [mReports, setMReports] = useState('');

    const [rYear,setRYear] = useState('');
    const [rMon,setRMon] = useState('');
    const [rWeek,setRWeek] = useState('');

    const [userids, setUserIds] = useState([]);
    
    const Role = localStorage.getItem("Role");
    const LoginId = localStorage.getItem('LoginId');


useEffect(()=>{
    idsdropdown();
    Datesform();
  },[])
  
const idsdropdown = ()=>{
    //console.log("idsdropdown")
//The below axios is used for getting all user id's
 Axios.get("http://localhost:3001/idsdropdown", {

  }).then((response)=>{
    
    var ids = [];
    setUserIds(response.data);

    response.data.map(id =>{ids.push(id.uid+"-"+id.fname)})
    users = ids.toString()
    
  }
  )

}


const UserIds = (e) =>{
    
  let val = e.target.value
    if(val === 'All'){
        setUser(users);
    } else{
        setUser(e.target.value);
    }
}


const Datesform = ()=>{

let thisYear = (new Date()).getFullYear();

//console.log(thisYear)
let pYear = thisYear - 15;
let mYear = thisYear +15;


do{
    years.push(pYear + 1)
    pYear ++;
}while(pYear<=mYear)

}


const handleSubmit = (e)=>{ 
   
if(mReports==="Project")
{
    history.push('/ProjectReports')
}
else if(reportType==="Weekly"&&rWeek!==""&&(user!=="" || LoginId!=="" ))
{
    history.push('/WeeklyReports')
}
else if(reportType==="Monthly"&&rMon!==""&&(user!=="" || LoginId!=="" ))
{
    history.push('/MonthlyReports')
}
else if(reportType==="Yearly"&&rYear!==""&&(user!=="" || LoginId!=="" ))
{
    history.push('/YearlyReports')
}

localStorage.setItem("ReportUsers",user)// selected users from dropdown
localStorage.setItem("MReports", mReports)//if user== manager then it chooses which type of reports Projec or Timesheet
localStorage.setItem("ReportType", reportType)//Report type weekly or monthly or yearly

localStorage.setItem("RYear",rYear)
localStorage.setItem("RMonth",rMon)
localStorage.setItem("RWeek",rWeek)

 
//history.push('/Reports')
    
}


    return ( 

        <div>
            <Header />
            
            <div className="reports-request-form">
                <form onSubmit={handleSubmit}>
                    {Role !== "HR" && Role !== "Manager" ? 
                    <div style={{paddingTop:"5px"}} style={{display: "-webkit-inline-box"}}>
                        <label>Report Type: </label>
                        <select className="reports-request-select" required onChange={(e) =>{setReportType(e.target.value)}} >
                            <option value="">Choose Option</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>&nbsp;
                        {reportType === "Weekly"?
                        <div>&nbsp;
                        <label>Week: </label>
                        <input type="date" className="reports-request-date" required value={rWeek} onChange={(e)=>{setRWeek(e.target.value)}}/>
                        </div>
                        :reportType === "Monthly"
                        ?<div style={{height:"100%"}}>&nbsp;
                        <lable>Month: </lable>
                        <select className="reports-request-select" required onChange={(e)=>{setRMon(e.target.value)}}>
                        <option value="">Choose Option</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                        </select>&nbsp;
                        <label>Year: </label>
                        <select className="reports-request-select" required onChange={(e)=>{setRYear(e.target.value)}}>
                            <option value="">Choose Year</option>
                            {years.map(year=>{
                                return <option value={year}>{year}</option>
                            })

                            }
                        </select>
                        </div>
                        :reportType === "Yearly"
                        ?<div style={{height:"100%"}}>
                        <label>Year: </label>
                        <select className="reports-request-select" required onChange={(e)=>{setRYear(e.target.value)}}>
                            <option value="">Choose Year</option>
                            {years.map(year=>{
                                return <option value={year}>{year}</option>
                            })

                            }
                        </select>
                        </div>:''}
                    </div>
                    :
                    Role === "HR"?
                        <div style={{paddingTop:"5px",display: "-webkit-inline-box"}}>
                            <label>Select User: </label>
                            <select className="reports-request-select" required onChange={(e)=>{UserIds(e)}}>
                                <option value="">Choose Option</option>
                                <option value="All">All</option>
                            {userids.map((result) =>{
                                return <option value={result.uid+"-"+result.fname} >{result.uid+"-"+result.fname} </option>
                            })}
                            </select>&nbsp;&nbsp;
                           <label>Report Type: </label>
                        <select className="reports-request-select" required onChange={(e) =>{setReportType(e.target.value)}}>
                            <option value="">Choose Option</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                        {reportType === "Weekly"?
                        <div>&nbsp;
                        <label>Week: </label>
                        <input type="date" className="reports-request-date" required value={rWeek} onChange={(e)=>{setRWeek(e.target.value)}}/>
                        </div>
                        :reportType === "Monthly"
                        ?<div style={{height:"100%"}}>&nbsp;
                        <lable>Month: </lable>
                        <select className="reports-request-select" required onChange={(e)=>{setRMon(e.target.value)}}>
                        <option value="">Choose Option</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                        </select>&nbsp;
                        <label>Year: </label>
                        <select className="reports-request-select" required onChange={(e)=>{setRYear(e.target.value)}}>
                            <option value="">Choose Year</option>
                            {years.map(year=>{
                                return <option value={year}>{year}</option>
                            })

                            }
                        </select>
                        </div>
                        :reportType === "Yearly"
                        ?<div style={{height:"100%"}}>&nbsp;&nbsp;
                        <label>Year: </label>
                        <select className="reports-request-select" required onChange={(e)=>{setRYear(e.target.value)}}>
                            <option value="">Choose Year</option>
                            {years.map(year=>{
                                return <option value={year}>{year}</option>
                            })

                            }
                        </select>
                        </div>:''}
                        </div>
                                :
                               Role === "Manager" ? 
                                    <div style={{display: "-webkit-inline-box"}}>
                                        <label>Reports: </label>
                                       <select className="reports-request-select" required onChange={(e)=>{setMReports(e.target.value)}}>
                                           <option value="">Choose Option</option>
                                           <option value="Project">Project</option>
                                           <option value="Timesheet">Timesheet</option>
                                       </select>&nbsp;
                                       
                                       
                                       {mReports === 'Timesheet' 
                                       ? 
                                       <div style={{display: "-webkit-inline-box"}}>
                                       <label>Select User: </label>
                                        <select className="reports-request-select" required onChange={(e)=>{UserIds(e)}}>
                                            <option value="">Choose Option</option>
                                            <option value="All">All</option>
                                                {userids.map((result) =>{
                                                    return <option value={result.uid+"-"+result.fname} >{result.uid+"-"+result.fname} </option>
                                                })}
                                        </select>&nbsp;&nbsp;
                                        <label>Report Type: </label>
                                        <select className="reports-request-select" required onChange={(e) =>{setReportType(e.target.value)}}>
                                            <option value="">Choose Option</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Yearly">Yearly</option>
                                        </select>
                                        {reportType === "Weekly"?
                                            <div>&nbsp;
                                            <label>Week: </label>
                                            <input type="date" className="reports-request-date" required value={rWeek} onChange={(e)=>{setRWeek(e.target.value)}}/>
                                            </div>
                                        :reportType === "Monthly"
                                            ?<div style={{height:"100%"}}>&nbsp;
                                                <lable>Month: </lable>
                                                <select className="reports-request-select" required onChange={(e)=>{setRMon(e.target.value)}}>
                                                    <option value="">Choose Option</option>
                                                    <option value="1">January</option>
                                                    <option value="2">February</option>
                                                    <option value="3">March</option>
                                                    <option value="4">April</option>
                                                    <option value="5">May</option>
                                                    <option value="6">June</option>
                                                    <option value="7">July</option>
                                                    <option value="8">August</option>
                                                    <option value="9">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>&nbsp;
                                                <label>Year: </label>
                                                <select className="reports-request-select" required onChange={(e)=>{setRYear(e.target.value)}}>
                                                    <option value="">Choose Year</option>
                                                    {years.map(year=>{
                                                        return <option value={year}>{year}</option>
                                                    })}
                                                </select>
                                            </div>
                                            :reportType === "Yearly"
                                            ?<div style={{height:"100%"}}>&nbsp;&nbsp;
                                            <label>Year: </label>
                                            <select className="reports-request-select" required onChange={(e)=>{setRYear(e.target.value)}}>
                                                <option value="">Choose Year</option>
                                                    {years.map(year=>{
                                                        return <option value={year}>{year}</option>
                                                    })}
                                            </select>
                                            </div>:''} 
                                       </div>
                                       :'' }
                                    </div>
                    :''}&nbsp;&nbsp;
                                       
                    <input type="submit" value="Submit" onClick={(e)=>{handleSubmit(e)}}/>
               </form> 
                    
            </div>
            
        </div>
     );
}
 
export default ReportsRequestPage;