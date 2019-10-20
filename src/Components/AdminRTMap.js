import React from 'react';
import AWrappedMap from './AMap';
export default function AdminRTMap(props) {
return(
<div style={{color:"white"}}>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Real Time Locations for all Registered Employees</h3>
    <AWrappedMap  
   googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization"}
   loadingElement= {< div style={{ height: `100%` }} />}
   containerElement= {<div style={{ height: `400px` }} />}
   mapElement= {<div style={{ height: `100%` }} />}
   />

</div>
)

}

