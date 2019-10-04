import React from 'react';
import Axios from 'axios';
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
    this.state={emplist:[]};
}

componentDidMount(){
    console.log('component did mount called');
    console.log('b4axiosgetemployeelist');
    Axios.post('https://realtimeloctracker.herokuapp.com/getemployeelist',{}).then(emp=>{
        var elist=[];
    emp.data.forEach(element => {
    elist.push(element);        
    });
this.setState({emplist:elist});    
}
    );
}

edit(obj){
console.log('edit ',obj);

}

remove(obj){
console.log('remove ',obj);
Axios.post('https://realtimeloctracker.herokuapp.com/empdelete',{"userid":obj}).then(res=>{
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

return(
<div>
<h3> Registered Employees... </h3>
    <ul>
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
    </ul>
</div>
)
}


}