import React from'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polyline} from 'react-google-maps';
function AdminMap(props){
    {console.log('props are :',props )}

    var fakearr=[];
    var center={};
    props.cd.forEach(obj => fakearr.push(obj.ltln));
    if(fakearr.length==0){
        center={ lat:28.736688,lng:77.112063 };
    }
    else{
        center=fakearr[0];
    }
    console.log('fakearr is :',fakearr);
     return(  
<GoogleMap
       defaultZoom={16}
       defaultCenter={center}
  center={center}
  >
    }

<Polyline

//path={[{lat:28.736688,lng:77.112063},{lat:28.736690,lng:77.112065},{lat:28.736696,lng:77.112081},{lat:28.737006,lng:77.113191}]}
path={fakearr}
geodesic={true}
options={{
    strokeColor: "#d4021b",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    icons: [
        {
            icon: "lineSymbol",
            offset: "0",
            repeat: "0"
        }
    ]
}}
/>

</GoogleMap>

    );
 }
    
 const TMWrappedMap=withScriptjs(withGoogleMap(AdminMap));
 export default TMWrappedMap;