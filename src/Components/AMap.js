import React, { useState } from'react';
import io from 'socket.io-client';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow ,Polyline} from 'react-google-maps';
import Axios from 'axios';
import Markimage from '../markerimage.png';
import Mark1 from '../mark2.bmp';
class Amap extends React.Component{

constructor(props){
super(props);
this.ssearr=[];
this.state={
  markings:[],
  loc:null,
  ssea:{},
//this.markings=[{lat: 28.7041, lng: 77.1025},{lat: 29.7041, lng: 77.1025},{lat: 30.7041, lng: 77.1025}];
sse:new EventSource('https://realtimeloctracker.herokuapp.com/SSE'),
//sse:new EventSource('http://localhost:2002/SSE',{withCredentials: true}),
}
}
componentDidMount(){
 Axios.post('https://realtimeloctracker.herokuapp.com/getLatestCoordforAll',{}).then((res)=>{
        console.log(res.data);
        console.log('state :',this.state);
        this.setState({markings:res.data});
   // this.setState({coords:res.data});
    });
    
//this.state.sse.addEventListener('message',msg=>console.log('sse data :',msg));

this.state.sse.onmessage=e=>{console.log('sse:',JSON.parse(e.data));this.ssearr=JSON.parse(e.data);this.setState({...this.state,markings:this.ssearr})}
this.state.sse.onopen=e=>{console.log('sse opened',e)}
this.state.sse.onerror=e=>{console.log('sse error',e)}
}
componentWillUnmount(){
  console.log('component about to be unmounted');
this.state.sse.close();
}

//idea is to dynamically recieve marking objects from server update em and re render the map with new marks
//through SSE -->componentDidMount()

//  //SSE--implementation on server be like : setTimeout( getlatestcoordsforallemps(),3000)-->SSE

//marker onclick --> infowindow ::userid
render(){
 // this.state.sse.addEventListener('message',msg=>console.log('sse data :',msg));
console.log('this.state.loc :',this.state.loc);
    console.log('inside render b4 return');
    console.log('ssearr :',this.ssearr);
    console.log('ssea in state',this.state.ssea);

    var image = "https://img.icons8.com/ios-filled/50/000000/standing-man.png";
    var manimage="https://img.icons8.com/color/48/000000/standing-man.png";
    
   var markers=this.state.markings;
   console.log('markers :',markers);
   return(  
   
   <GoogleMap
   defaultZoom={8}
   defaultCenter={{lat: 28.7041, lng: 77.1025}}
   >
    {markers.map(mark=>(
    <Marker
    //icon={Markimage}
    //icon={Mark1}
    icon={manimage}
    position={mark}
    key={mark.lat}
    title={mark.userid}
    onClick={()=>this.setState({...this.state,loc:mark})}
    />
     ))} 
{console.log('2nd block')}

{this.state.loc&&
<InfoWindow
//position={{lat: 28.7041, lng: 77.1025}}
position={this.state.loc}
onCloseClick={()=>this.setState({...this.state,loc:null})}
><div>{this.state.loc.userid}</div>
  </InfoWindow>
}
 </GoogleMap>

);

}

}
const AWrappedMap=withScriptjs(withGoogleMap(Amap));
export default AWrappedMap;