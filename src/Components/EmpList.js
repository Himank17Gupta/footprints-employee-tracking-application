import React from 'react';
import Axios from 'axios';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
// export default function ListEmployee(){
// return(
// <>
// <h1>Employee List...</h1>
// <ul>
//     <li/>
//     <li/>
//     <li/>
// </ul>
// </>
// )

// }

export default class ListEmployee extends React.Component{
constructor(props){
    super(props);
    this.state={emplist:[],loader:true};
}

componentDidMount(){
    console.log('component did mount called');
    console.log('b4axiosgetemployeelist');
    Axios.get('https://realtimeloctracker.herokuapp.com/getEmpDetails').then(emp=>{
        var elist=[];
    emp.data.forEach(element => {
    elist.push(element);        
    });
this.setState({emplist:elist,loader:false});    
}
    );
}

edit(obj){
console.log('edit ',obj);

}

remove(obj){
console.log('remove ',obj);
Axios.post('https://realtimeloctracker.herokuapp.com/empdelete',{"userid":obj.userid}).then(res=>{
    console.log(res.data);
    var arr= this.state.emplist;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==obj){
            arr.splice(i,1)
        }
    }
    this.setState({emplist:arr});
}).catch(err=>{
console.log(err);
});

}

clear(obj){
    console.log('clear coords called');
}

render(){
console.log('state:', this.state.emplist);
return(
<div style={{color:"white"}}>

{this.state.loader?(<><h3> Loading Registered Employee List</h3><div className="spinner-border text-info" role="status">
<span className="sr-only">Loading...</span>
</div></>):(<h3>Perform Administrative Operations here..</h3>)}
    {/* <ul>
    {
this.state.emplist.map(obj=>{
return(
<li key={obj}>
{obj} &nbsp; &nbsp;
<button  onClick={()=>this.edit(obj)} >edit</button> &nbsp;
<button  onClick={()=>this.remove(obj)} >remove employee</button> &nbsp;
<button  onClick={()=>this.clear(obj)} >clear track history</button>
</li>
)
})
    }
    </ul> */}
{/*<tbody>
    */}
    <MDBTable striped style={{color:"white"}}>
    <MDBTableHead color="special-color-dark" textWhite>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>E-Mail</th>
          <th>Contact</th>
          <th>Edit</th>
          <th>Remove</th>
          <th>Clear</th>
          <th>notification</th>
        </tr>
      </MDBTableHead>
    <MDBTableBody>
{
    this.state.emplist.map(obj=>{
    return(
    <tr key={obj.userid}>
    <td> {obj.userid} </td>
    <td>{obj.password}</td>
    <td>{obj.email}</td>
    <td>{obj.phone}</td>
    <td><button  onClick={()=>this.edit(obj)} >edit info</button> </td>
    <td><button  onClick={()=>this.remove(obj)} >remove employee</button> </td>
    <td><button  onClick={()=>this.clear(obj)} >clear track history</button></td>
    <td><button>#notify</button></td>
    </tr>
    )
    })
        }
</MDBTableBody>
{/* </tbody> */}
</MDBTable>
</div>
)
}


}