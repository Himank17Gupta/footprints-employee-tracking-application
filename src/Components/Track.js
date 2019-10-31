import React from 'react';
import TMWrappedMap from './TrackMap';
import axios from 'axios';

export default class Track extends React.Component{

constructor(props){
    super(props);
    this.userid= this.props.location.state.dum;
    this.state={coords:[]};
}
componentWillMount(){
    console.log(this.userid); 
    axios.post('https://realtimeloctracker.herokuapp.com/getCoords',{userid:this.userid}).then((res)=>{
        console.log(res)
    this.setState({coords:res.data});
    });
}
componentDidMount(){
    console.log(this.userid); 
}
render(){
   
    return(
    <div>
        <h2>Showing last 24hr track record for {this.userid} (ref id- 2002)</h2>
        <button>refresh</button>
        <TMWrappedMap 
        us={this.userid}
        cd={this.state.coords}
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization"}
        loadingElement= {< div style={{ height: `100%` }} />}
        containerElement= {<div style={{ height: `400px` }} />}
        mapElement= {<div style={{ height: `100%` }} />}
        />
    </div>
    )
}


}