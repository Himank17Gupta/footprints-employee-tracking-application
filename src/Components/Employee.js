import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn , } from 'mdbreact';
import axios from 'axios';
class  EmpLogin extends React.Component {

    constructor(props){
        super(props);
        this.obj={};
        this.state={'loader':false};
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
        this.setState({'loader':true});
        console.log('axioslogincalled');
        axios.post('https://realtimeloctracker.herokuapp.com/emplogin',this.obj).
        then( (res)=>{ console.log(res);
          this.setState({'loader':false});
      if(res.data==="Invalid"){
        this.setState({'loader':false});
      document.getElementById('errmsg').innerText='Incorrect UserId or ReferenceId..Try Again';
      }
      else{
        this.props.history.push({pathname:'/employeemap',state:{userid:this.obj.userid}});
      }
      }).catch((err)=>{
        alert("something went wrong");
        console.log(err)});
      }

    render(){
  return (
    <MDBContainer className="container" style={{color:"white"}}>
     <br/>
      <MDBRow>
        <MDBCol md="12">
          <form color="white">
            <p className="h5 text-center mb-4" style={{color:"white"}}>Sign in</p>
            <div className="grey-text">
              <MDBInput
                 
                label="Type your UserName"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={this.takeInput.bind(this)}
                name="userid"
                color="white"
              />
              <MDBInput
                label="Enter Reference Id given by your administrator"
                icon="lock"
                group
                type="password"
                validate
                onChange={this.takeInput.bind(this)}
                name="password"
              />
            </div>
            <label id='errmsg' style={{color:'#ed8ea1',textAlign:"center",textAlignVertical: "center"}}></label>
            <div className="text-center">
              {  this.state.loader?(<div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>):(<></>)}
      <br></br>
              <MDBBtn  onClick={this.handleSubmit.bind(this)}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

export default EmpLogin;
