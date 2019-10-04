import React from 'react';
import Axios from "axios";
import { BrowserRouter , Route, Link } from "react-router-dom";
import Track from './Track';

export default class Seetracks extends React.Component{

constructor(props){
    super(props);
    this.state={emplist:[]};
}

componentDidMount(){
    console.log('component did mount called');
    console.log('b4axiosgetemployeelist');
    Axios.post('https://realtimeloctracker.herokuapp.com/getemployeelist',{}).then(emp=>{
        console.log(emp);
        var elist=[];
    emp.data.forEach(element => {
    elist.push(element);        
    });
this.setState({emplist:elist});    
}
    );
}

render(){
    return(<>
    {/* <BrowserRouter> */}
         
         <h2> Choose Emplyoee to Check Route History</h2>
         <ul>
         {
             this.state.emplist.map((emp)=>
             <li>
            <Link to={{
             pathname:'/admindashboard/tracks',state:{dum:emp} }}>{emp}</Link>
          </li>
             )
         }
         </ul>
         {/* <ul>
          <li>
            <Link to={{
             pathname:'/tracks',state:{dum:this.state.emplist[0]} }}>{this.state.emplist[0]}</Link>
          </li>
          <li>
            <Link to={{
             pathname:'/tracks',state:{dum:this.state.emplist[1]} }}>{this.state.emplist[1]}</Link>
          </li>
          <li>
            <Link to={{
             pathname:'/tracks',state:{dum:this.state.emplist[2]} }}>{this.state.emplist[2]}</Link>
          </li>
        </ul> */}


{/* //-------------------------------------------------------------------------------// */}
        {/* <div className="container">
      <Route path="/tracks" exact component={Track} />
       </div> */}
       {/* </BrowserRouter> */}
         </>)
}

}