import React from 'react';
import WrappedMap from './EMap';
function EmpMap(props) {
  var userid= props.location.state.userid;     //useridofloggedinemployee
return(

   //left: signoutbutton

<div>
   <div style={{textAlign:'center', fontStyle: 'italic',fontSize: '40px'}}>dummy text--Welcome {userid}-- dummy text</div>
   <WrappedMap  
   userid={userid}
   googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization"}
   loadingElement= {< div style={{ height: `100%` }} />}
   containerElement= {<div style={{ height: `400px` }} />}
   mapElement= {<div style={{ height: `100%` }} />}
   />

</div>
)

}



export default EmpMap;

