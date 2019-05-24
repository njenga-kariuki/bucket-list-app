import React, {Component} from 'react';
import TripDetail from '../components/TripDetails';
import { Item} from 'semantic-ui-react'

class TripDetailContainer extends Component {
  state = {
    loaderDisplay: 'active',
    loaderShow: '',
    displayCards: 'cards-hidden'
    // tripData: null
  }

  //map over fetched trips and render details for each
  renderTripDetails=()=>{
    // this.fetchTripDetails()
    // const {tripData} = this.state
    if (this.props.tripData){
        return <TripDetail trip={this.props.tripData} hotelData={this.props.tripData.trip.destination_data.hotel_data} activityData={this.props.tripData.trip.destination_data.activity_data} />
    } else {
      return
    }
  }

  //fetch to server to get trip details to show in menu
  // fetchTripDetails = () => {
  //   let userID = localStorage.getItem('user_id')
  //   let token = localStorage.getItem('jwt')
  //
  //   fetch(`http://localhost:3000/api/v1/users/${userID}/trip_details/${this.props.tripId}`,{
  //     method: 'GET',
  //     headers: {Authorization: `Bearer ${token}`
  //     }
  //   })
  //   .then(resp=>resp.json())
  //   .then(data=> {
  //     console.log(data)
  //     this.setState({tripData: data})
  //     return this.renderTripDetails(data)
  //   })
  // }

  //timing to hide cards on estimate of when they load - this will need to change
  componentDidMount=()=>{
    // this.fetchTripDetails()
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
