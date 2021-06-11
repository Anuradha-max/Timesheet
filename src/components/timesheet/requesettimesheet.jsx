
import {useHistory} from 'react-router-dom';
import React, { useState} from "react";
import TimeSheet from '../menu/timesheetPage.jsx'
export default function RequestTimesheet(){

  const [myDate, setMyDate] = useState("");

  const history = useHistory(); 
 


  localStorage.setItem('myDate', myDate);
  
  
  

  const Requesttimesheet =()=>{
    
  history.push({
    pathname: '/edittimesheet',
    
  

  });
  
  }



return(
    <div>

<TimeSheet/>

<center>
  <form onSubmit={Requesttimesheet}>
<div class="requesttimesheet" align="right">
<br></br><br></br>
<input type="date" name="myDate" required class="rdate" value={myDate} onChange={e => setMyDate(e.target.value)} />
{'          '}
<button type="submit" class="rbtn" >Submit</button>
</div>
</form>
</center>

</div>
)
}
