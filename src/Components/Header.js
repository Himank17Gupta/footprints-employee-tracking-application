import React from 'react';
import { MDBNavbar,MDBNavbarBrand,MDBContainer } from "mdbreact";
function Header(){
  //style={{ marginTop: '20px' }}
    return(<MDBContainer>
        <MDBNavbar color="special-color-dark lighten-4"  light>
          <MDBContainer>
            <MDBNavbarBrand className="white-text">Employee Tracker Application</MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
  </MDBContainer>)
}
export default Header;