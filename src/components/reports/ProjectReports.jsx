import React from 'react';
import Header from '../header/header.jsx'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import Moment from 'moment';

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
{Moment(val.PStartDate).format('MMM/DD/yyyy')}
</td>
<td>
{Moment(val.PEndDate).format('MMM/DD/yyyy')}
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
     
        taskList: [{}],
      
        
        };
 componentDidMount()
        {
            axios.get("http://localhost:3001/projectreports",{
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
                let { taskList } = this.state;
            
            return (
 
                <div>
                < Header/>
                <form>
                <br/><br/><br/><br/>
                
                <div class="Tcontainer">
                <table id="Project" className="table" width="100%" >
                <thead>
                <tr>
                
                <th className="required">UserId</th>
                <th className="required">Client</th>
                <th className="required">Project</th>
                <th className="required">TotalHours</th>
                <th className="required">PStartDate</th>
                <th className="required">PEndDate</th>
                <th className="required">Resources</th>
                
                
                </tr>
                </thead>
                <tbody >
                <ProjectReports
                taskList={taskList}
                />
                </tbody>
                
                </table><br/>
                <ReactHTMLTableToExcel
                className="btn btn-info"
                table="Project"
                filename="ProjectReportExcel"
                sheet="Sheet"
                buttonText="Download" />
                </div><br/>
                </form>
                </div>
);

}
}

export default Reports;