import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Segment} from 'semantic-ui-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};
const API_KEY =`${process.env.REACT_APP_API_KEY_GM}`

class DestinationMap extends Component {

  render() {
    let locationLat = parseFloat(this.props.latitude)
    let locationLng = parseFloat(this.props.longitude)

    return (
      <Segment basic style={{height: '500px'}} size='massive'>
        <Map
         google={this.props.google}
         zoom={13}
         style={mapStyles}
         initialCenter={{
           lat: locationLat,
          lng: locationLng
         }}
       />
   </Segment>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY
})(DestinationMap);
