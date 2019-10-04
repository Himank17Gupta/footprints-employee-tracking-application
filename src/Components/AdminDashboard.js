import React from 'react'
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink,MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";
import AdminRTMap from './AdminRTMap';
import EmployeeCrud from './EmployeeCrud';
import Seetracks from './SeeTracks';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import ListEmployee from './EmpList';
import Track from './Track';
function AdminDashboard(props){

  //props.history.push('/RealTimeLocations');

  return(
     <BrowserRouter>
    
    
    <MDBNav color="stylish-color" className="justify-content-center font-weight-bold py-1 px-1 mb-4">
     <MDBNavItem>
        <MDBNavLink className="white-text" active to="/admindashboard/RealTimeLocations">Real-time-Locations</MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
        <MDBNavLink className="white-text" to="/admindashboard/Seetracks" >See Tracks </MDBNavLink>
      </MDBNavItem>

      <MDBDropdown >
      <MDBDropdownToggle  className="font-weight-bold white-text"  caret color="stylish-color-dark">
        Employee Operations
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
      {/* <MDBNavLink className="white-text" to="/EmplyoeeCrud" >
        <MDBDropdownItem>EmployeeCrud</MDBDropdownItem>
      </MDBNavLink> */}
      <MDBNavLink className="white-text" to="/admindashboard/AddEmp" >
        <MDBDropdownItem>Add Employee</MDBDropdownItem>
      </MDBNavLink>  
      {/* <MDBNavLink className="white-text" to="/EditEmp" >
        <MDBDropdownItem>Edit Employee</MDBDropdownItem>
      </MDBNavLink> */}
        <MDBNavLink className="white-text" to="/admindashboard/ListEmp" >
        <MDBDropdownItem>See Employee List</MDBDropdownItem>
      </MDBNavLink>

      </MDBDropdownMenu>

      </MDBDropdown> 


      </MDBNav>

      {/* <div className="container"> */}
      {/* <h2>Admin Dashboard Section</h2> */}
      
      <Switch>
      <Route path="/admindashboard/RealTimeLocations" exact component={AdminRTMap} />
      {/* <Route path="/EmplyoeeCrud" component={EmployeeCrud} />  */}
      <Route path="/admindashboard/Seetracks" component={Seetracks} />
      <Route path="/admindashboard/AddEmp" component={AddEmployee} />
      {/* <Route path="/EditEmp" component={EditEmployee} /> */}
      <Route path="/admindashboard/ListEmp" component={ListEmployee} />
      <Route path="/admindashboard/tracks" exact component={Track} />
      <Redirect from='*' to='/admindashboard/RealTimeLocations' />
       {/* </div> */}
        {/* admin dashboard --(to do -->render RealTimeLocations default onload) */}
       
     </Switch>
     
 </BrowserRouter>
    
    )
}
export default AdminDashboard;
