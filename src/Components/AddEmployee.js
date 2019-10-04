import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';

function handleAddSubmit(){
console.log('handleaddsubmit called');
let eid=document.getElementById('e-id').value;
let eemail=document.getElementById('e-email').value;
let ephone=document.getElementById('e-phone').value;
let epassw=document.getElementById('e-passw').value;

if(eid&&eemail&&ephone&&epassw){
let eobj={"userid":eid,"password":epassw,"email":eemail,"phone":ephone};
console.log('eobj is :',eobj);
axios.post('https://realtimeloctracker.herokuapp.com/addemployee',eobj).
then(res=>{console.log('response is ',res)
          document.getElementById('addInfo').innerText=res.data;
          }).catch(err=>{console.log('some error occured',err)
                       document.getElementById('addInfo').innerText=err;
                        });
}
else{
    console.log('fill out complete details');
    document.getElementById('addInfo').innerText='fill out complete details';
}
}

const FormPage = () => {
  return (
    <MDBContainer  className="container"   >
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Fill Employee information</p>
            <div className="grey-text">
              <MDBInput
                label="Employee UserId"
                id='e-id'
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Employee email-id"
                icon="envelope"
                id='e-email'
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Employee Contact Number"
               // icon="exclamation-triangle"
               icon="phone" 
               id='e-phone'
               group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Employee password/ref. id"
                icon="lock"
                id='e-passw'
                group
                type="password"
                validate
              />
            </div>
            <h3 id='addInfo'></h3>
            <div className="text-center">
              <MDBBtn color="primary"  onClick={()=>handleAddSubmit()}>Add employee</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;