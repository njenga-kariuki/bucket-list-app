import React, {Component, Fragment} from 'react';
import TripDetail from '../components/TripDetails';
import { Item, Segment, Loader, Image, Dimmer} from 'semantic-ui-react'

class TripDetailContainer extends Component {
  state = {
    loaderDisplay: 'active',
    loaderShow: '',
    displayCards: 'cards-hidden'
  }
  //map over fetched trips and render details for each 
  renderTrips=()=>{
    return this.props.allTrips.map((trip,index)=>{
      return <TripDetail trip={trip} key={index} hotelData={trip.destination_data.hotel_data} activityData={trip.destination_data.activity_data} />
    })
  }

  componentDidMount=()=>{
    setTimeout(()=>{
      this.setState({loaderDisplay:''})
      this.setState({loaderShow:'cards-hidden'})
      this.setState({displayCards: ''})
    },7000)
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
