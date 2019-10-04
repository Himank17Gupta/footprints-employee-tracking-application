import React from "react";
import { BrowserRouter,Route } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink,MDBContainer } from "mdbreact";
import About from "./Components/About";
import EmpLogin from "./Components/Employee";
import AdminLogin from "./Components/Admin";
import FooterPage from "./Components/Footer";
import Header from "./Components/Header";
import EmpMap from "./Components/EmployeeMap";
import AdminDashboard from "./Components/AdminDashboard";
import AdminRTMap from "./Components/AdminRTMap";
import Track from "./Components/Track";

function App3() {
  return  (
  <BrowserRouter>
  <MDBContainer>
  {/* <Header/> */}
  
    <MDBNav  color="special-color-dark" className="justify-content-end font-weight-bold py-2 px-2 mb-3">
    <MDBNavItem>
        <h1 className="white-text" > &nbsp;Employee Tracker Application&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" active to="/">About</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" to="/employee" >Employees</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" to='/admin'>Administration</MDBNavLink>
      </MDBNavItem>
     {// <MDBNavItem>
       // <MDBNavLink disabled to="#4">Disabled</MDBNavLink>
      //</MDBNavItem>
     }
    </MDBNav>


    <div className="container">
      <Route path="/" exact component={About} />
      <Route path="/employee" component={EmpLogin} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/employeemap" component={EmpMap} />
      <Route path="/admindashboard" component={AdminDashboard}/>
      
    </div>


    <FooterPage  position="absolute"
    marginTop="-100px"
    bottom="0"
    left= "0"
    right="0"
    height="100px"     />

</MDBContainer>
  
</BrowserRouter>
);
}



export default App3;
