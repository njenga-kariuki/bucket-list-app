import React, {Component} from 'react';
import TripDetail from '../components/TripDetails';
import { Item} from 'semantic-ui-react'

class TripDetailContainer extends Component {

  ///function to map over fetched trips and render each tripe
  renderTrips=()=>{
    return this.props.allTrips.map((trip,index)=>{
      return <TripDetail trip={trip} key={index} hotelData={this.props.tripHotelData[index]} activityData={this.props.activityData[index]} />
    })
  }

  render() {
    return (
      <Item.Group divided>
        {this.renderTrips()}
      </Item.Group>
    )
  }
}
export default TripDetailContainer;
