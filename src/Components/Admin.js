import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";

class AdminLogin extends React.Component {

constructor(props){
    super(props);
    this.obj={};
}

takeInput(event){
    var key=event.target.name;
    var value=event.target.value;
    this.obj[key]=value;
    }

handleSubmit(event) {
        console.log('handlesubmit called');
        event.preventDefault();
        console.log('empdata is : ',this.obj);

        console.log('axioslogincalled');
        Axios.post('https://realtimeloctracker.herokuapp.com/adminlogin',this.obj).then((res)=>{
           console.log(res);
           if(res.data==="Invalid Userid or Password"){
           document.getElementById('errmsg2').innerText='Incorrect UserId or Password..Try Again';
           } 
           else{
          this.props.history.push('/admindashboard');

          //this.props.history.push('/RealTimeLocations');
           }
           }).catch((err)=>console.log(err));
        
          }

render(){
  return (
    <MDBContainer>
      <br/>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={this.handleSubmit.bind(this)} >
            <p className="h4 text-center mb-4">Sign in to your Administrative account</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="text"
              id="defaultFormLoginEmailEx"
              name="userid"
              className="form-control "
              onChange={this.takeInput.bind(this)}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
            
              type="password"
              id="defaultFormLoginPasswordEx"
              name="password"
              className="form-control"
              onChange={this.takeInput.bind(this)}
            />
             <label id='errmsg2' style={{color:'#ed8ea1',textAlign:"center",textAlignVertical: "center"}}></label>
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">Go to Admin Dashboard</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

export default AdminLogin;