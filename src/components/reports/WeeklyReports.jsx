import React from 'react';
import Header from '../header/header.jsx'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import Moment from 'moment';
class Reports extends React.Component {

    state = {
    concat1:[],
    taskList: [{}],
    concat:[],
    
    };
    
    
    componentDidMount()
    {
     let Fname="";
      
   // const MReports=localStorage.getItem("MReports")
    
    
    
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
     // const ReportType=localStorage.getItem("ReportType")
    
    for(i=0;i<EmployeeLength;i++)
    {
        EmployeeId.push(i)
    }
      //console.log("Employee",EmployeeId)
    
      let user="";
     var WeekDate= window.WeekDate;
     //console.log("WeekDateDid",WeekDate)
    EmployeeId.forEach((i) => {
      let Emp=[];
      Emp=Employee[i].split("-");
       
        let uname=Emp[0]
        
        let Response=[];
       
        
        
        if(response)
        { 
        
       
        for(var j=0;j<response.data.length;j++)
        {
    
        Response.push(j);
        }
         
        
        Response.forEach((j)=>
        {
          let Day01=0;
                let Day02=0;
                let Day03=0;
                let Day04=0;
                let Day05=0;
                let Day06=0;
                let Day07=0;
          let t=0;
          let Cmt1h = response.data[j].Cmt1;
          let Cmt2h = response.data[j].Cmt2;
          let Cmt3h = response.data[j].Cmt3;
          let Cmt4h = response.data[j].Cmt4;
          let Cmt5h = response.data[j].Cmt5;
          let Cmt6h = response.data[j].Cmt6;
          let Cmt7h = response.data[j].Cmt7;
          if(Cmt1h==="") { Cmt1h="null,"; }
                  else{ Cmt1h=Cmt1h+"^"; }
                  if(Cmt2h==="") { Cmt2h="null,"; } else { Cmt2h=Cmt2h+"^"; }
                  if(Cmt3h==="") { Cmt3h="null,"; } else { Cmt3h=Cmt3h+"^"; }
                  if(Cmt4h==="") { Cmt4h="null,"; } else { Cmt4h=Cmt4h+"^"; }
                  if(Cmt5h==="") { Cmt5h="null,"; } else { Cmt5h=Cmt5h+"^"; }
                  if(Cmt6h==="") { Cmt6h="null,"; } else { Cmt6h=Cmt6h+"^"; }
                  if(Cmt7h==="") { Cmt7h="null,"; } else { Cmt7h=Cmt7h+"^"; }
          //console.log("uname",uname)
          //console.log("week",WeekDate)
    if(response.data[j].UserId===uname&&response.data[j].Date===WeekDate)
    {
           Day01=Day01+parseInt(response.data[j].Sunday)
           Day02=Day02+parseInt(response.data[j].Monday)
           Day03=Day03+parseInt(response.data[j].Tuesday)
           Day04=Day04+parseInt(response.data[j].Wednesday)
           Day05=Day05+parseInt(response.data[j].Thursday)
           Day06=Day06+parseInt(response.data[j].Friday)
           Day07=Day07+parseInt(response.data[j].Saturday)
           t=Day01+Day02+Day03+Day04+Day05+Day06+Day07;
           let cmt1=Cmt1h+Cmt2h+Cmt3h+Cmt4h+Cmt5h+Cmt6h+Cmt7h;
           let A=  cmt1.replaceAll("null","")
                 //   System.out.println("A"+A);
                    
                     let A1= A.replaceAll(",", ""); 
                    // System.out.println("A1"+A1); 
                     if(A1.length>1)
                     {
                     A1=A1.substring(0,A1.length-1);
                     }
           user=user+uname+","+Emp[1]+","+response.data[j].Client+","+response.data[j].Project+","+WeekDate+","+Day01+","+Day02+","+Day03+","+Day04+","+Day05+","+Day06+","+Day07+","+t+","+A1+"&";
    //console.log("inside",user);
          }
    
    //console.log("users",user)
        })
      }
    
    
    })
    //console.log("user",user)
    this.setState({concat:user})
    //console.log("concat",this.state.concat)
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
    fil=this.state.concat.split("&")
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
        var myDate=localStorage.getItem("RWeek")
        var CurrentDate = new Date(new Date(parseInt(myDate.substring(0,4)), parseInt(myDate.substring(5,7))-1, parseInt(myDate.substring(8,10))));
      
        var CurrentWeekDay = CurrentDate.getDay();
        
        var CurrentWeekDate = new Date(
        new Date(CurrentDate).setDate(CurrentDate.getDate() - CurrentWeekDay)
        );
        
        var Day1 = new Date(new Date(CurrentWeekDate).setDate(CurrentWeekDate.getDate() + 0)).toDateString();
        //console.log("Day1:"+Day1)
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
        
        
        
        var t= Moment(myDate).format('ddd MMMM, yyyy')
        var CurrentMon=t.substring(3,7)
        var Sunday= Moment(Day1).format('ddd MMMM, yyyy')
        var Monday= Moment(Day2).format('ddd MMMM, yyyy')
        var Tuesday= Moment(Day3).format('ddd MMMM, yyyy')
        var Wednesday= Moment(Day4).format('ddd MMMM, yyyy')
        var Thursday= Moment(Day5).format('ddd MMMM, yyyy')
        var Friday= Moment(Day6).format('ddd MMMM, yyyy')
        var Saturday= Moment(Day7).format('ddd MMMM, yyyy')
        
        var WeekDate="";
        //console.log("sun:"+Sunday)
        if(Sunday.includes(CurrentMon))
        {
        
        WeekDate=Day1;
        }
        else if(Monday.includes(CurrentMon))
        {
        
        WeekDate=Day2;
        }
        else if(Tuesday.includes(CurrentMon))
        {
        
        WeekDate=Day3;
        }
        else if(Wednesday.includes(CurrentMon))
        {
        
        WeekDate=Day4;
        }
        else if(Thursday.includes(CurrentMon))
        {
        
        WeekDate=Day5;
        }
        else if(Friday.includes(CurrentMon))
        {
        
        WeekDate=Day6;
        }
        else if(Saturday.includes(CurrentMon))
        {
        
        WeekDate=Day7;
        }
        //console.log("bef WeekDate:"+WeekDate);
        WeekDate= Moment(WeekDate).format('MMM DD yyyy')
        window.WeekDate=WeekDate
        //console.log("calen:"+CurrentMon);
        //console.log("WeekDate:"+WeekDate);
        return (
 
            <div>
            
            < Header/>
            <form>
<br/><br/><br/><br/>

<div class="Tcontainer">
<table id="Project" className="table" width="100%" >
<thead>
<tr>
<th >Employee Id</th>
<th>UserName</th>
<th >Client</th>
<th >Project</th>
<th>Date</th>
<th id="Day1">{Day1_str}</th>
<th id="Day2">{Day2_str}</th>
<th id="Day3">{Day3_str}</th>
<th id="Day4">{Day4_str}</th>
<th id="Day5">{Day5_str}</th>
<th id="Day6">{Day6_str}</th>
<th id="Day7">{Day7_str}</th>
<th>Total</th>
<th>Comments</th>
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
filename="WeeklyReportExcel"
sheet="Sheet"
buttonText="Download" />
</div><br/>
</form>
</div>
);

}
}

export default Reports;
    