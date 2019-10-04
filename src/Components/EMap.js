import React from'react';
import io from 'socket.io-client';
 import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polyline} from 'react-google-maps';
 class Map extends React.Component{
    constructor(props){
      super(props);
      this.currentpos={lat: 28.7041, lng: 77.1025}
      this.socket=io('https://realtimeloctracker.herokuapp.com');
      //socket:io('http://localhost:2002')
      this.userid=props.userid;
    }
//check the dynamicity of getposition login..looks fine iniatially ironically.
getposition(){
console.log('inside getposition');
navigator.geolocation.getCurrentPosition(position=>{                      //watchposition
   var lat=position.coords.latitude;
   var lng=position.coords.longitude;
   console.log('lat:',lat,"lng:",lng);
   this.currentpos= {'lat':lat,'lng':lng};
   console.log('currentpos is :',this.currentpos);
   console.log('b4 socket emit');
   var dt=new Date();
   console.log(dt.getDate()+" "+dt.getMonth()+" "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds());
   this.socket.emit('Coords_update',{'empId':this.userid,'coords':{'ltln':{'lat':lat,'lng':lng},'time':dt.getTime()}});
   console.log('after socket emit');
   this.forceUpdate(); 
  },
   err=>{alert("Gogle maps can't be loaded",err)},
   {enableHighAccuracy:true,}
   )


}
//idea is to update this.currentpos with each watchposition inside getposition...
//after every updatation socket object will be sent off..
//render method's marker will hold this.currentpos to show current position
render(){
  console.log('inside render b4 return');
  this.getposition();
  console.log(this.currentpos);
      return(  
 <GoogleMap
        defaultZoom={10}
        defaultCenter={this.currentpos}
        center={this.currentpos}
        >
       <Marker 
         position={this.currentpos}
        />
 </GoogleMap>
     );
  }
}
  const WrappedMap=withScriptjs(withGoogleMap(Map));
  export default WrappedMap;


