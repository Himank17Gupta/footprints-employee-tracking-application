import React from 'react';
import Axios from "axios";
import { BrowserRouter , Route, Link } from "react-router-dom";
import Track from './Track';

export default class Seetracks extends React.Component{

constructor(props){
    super(props);
    this.state={emplist:[],loader:true};
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
this.setState({emplist:elist,loader:false});    
}
    );
}

render(){
    return(<>
    {/* <BrowserRouter> */}
         
         <h2 style={{color:"white"}}> Choose Emplyoee to Check Route History</h2>
         {this.state.loader?(<div className="spinner-border text-info" role="status">
<span className="sr-only">Loading...</span>
</div>):(<div></div>)}
         <ul style={{height:'250px'}}>
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