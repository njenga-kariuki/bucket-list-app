import React, {Component, Fragment} from 'react';
import TripDetail from '../components/TripDetails';
import { Item, Segment, Loader, Image, Dimmer} from 'semantic-ui-react'

class TripDetailContainer extends Component {
  state = {
    loaderDisplay: 'active',
    loaderShow: '',
    displayCards: 'cards-hidden'
  }
  ///function to map over fetched trips and render each tripe
  renderTrips=()=>{
    return this.props.allTrips.map((trip,index)=>{
      return <TripDetail trip={trip} key={index} hotelData={this.props.tripHotelData[index]} activityData={this.props.activityData[index]} />
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
