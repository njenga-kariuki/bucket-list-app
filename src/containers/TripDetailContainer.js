import React, {Component} from 'react';
import TripDetail from '../components/TripDetails';
import { Item} from 'semantic-ui-react'

class TripDetailContainer extends Component {
  state = {
    loaderDisplay: 'active',
    loaderShow: '',
    displayCards: 'cards-hidden'
  }

  //map over fetched trips and render details for each
  renderTripDetails=()=>{
    if (this.props.tripData){
        return <TripDetail trip={this.props.tripData} hotelData={this.props.tripData.trip.destination_data.hotel_data} activityData={this.props.tripData.trip.destination_data.activity_data} />
    } else {
      return
    }
  }

  //timing to hide cards on estimate of when they load - this will need to change
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
        {this.renderTripDetails()}
      </Item.Group>
    )
  }
}
export default TripDetailContainer;
