import React from "react";
import about1 from "../about1.png";
import about2 from "../image (1).jpg";
import about3 from "../image (5).jpg";
//import about4 from "../image (2).png";
import about4 from "../adminpic.jpg";
import about6 from "../about3.jpg";
import about10 from "../about10.png";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              //src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              src={about1}
              alt="First slide"
            />
           <MDBMask overlay="blue-grey-slight" /> 
          </MDBView>
          <MDBCarouselCaption>
             <h2 className="h2-responsive" style={{fontFamily:'cursive',color:'black'}}>Some text... </h2> 
            {/* <p  style={{fontFamily:'cursive',color:'grey'}}>track the real time locations of the users, all of them at one place, at onceS on your device</p> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              //src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              src={about4}
              alt="Second slide"
            />
          <MDBMask overlay="blue-grey-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h2 className="h2-responsive"  style={{fontFamily:'cursive',color:'black'}}>Some text...</h2>
            {/* <p  style={{fontFamily:'cursive',color:'grey'}}>Second text</p> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              //src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              src={about6}
              alt="Third slide"
            />
          <MDBMask overlay="blue-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h2 className="h2-responsive"  style={{fontFamily:'cursive',color:'black'}}>Some text...</h2>
            {/* <p  style={{fontFamily:'cursive',color:'black'}}>Third text</p> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              //src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              src={about10}
              alt="Fourth slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h2 className="h2-responsive"  style={{fontFamily:'cursive',color:'black'}}>Some text...</h2>
            {/* <p>Fourth text</p> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;