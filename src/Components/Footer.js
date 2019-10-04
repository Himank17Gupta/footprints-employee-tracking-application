import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="special-color-dark" 
    className="font-small pt-4 mt-4  footer navbar-fixed-bottom">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Developer</h5>
            <p>
              developed and maintained by @Himank17Gupta for marketplace expertise solutions.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href='#!'> Github/Himank17Gupta </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;