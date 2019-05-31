import React, {Component, Fragment} from 'react';
import TripDetailContainer from './TripDetailContainer';
import {Header, Dropdown, Dimmer, Loader} from 'semantic-ui-react'

class TripDashboard extends Component {
  state = {
    loader: "ui active transition visible dimmer",
    tripDetailsVisibility: 'hide-visibility'
  }

  componentDidMount = () => {
    this.tripDropDown()
  }

  //create drop down list of trip destinations
  tripDropDown = () => {
    if (this.props.allTrips.length > 0) {
      let tripList = this.props.allTrips.map(trip=>({
        key: trip.id,
        text: trip.destination_data.city || trip.destination_data.state || trip.destination_data.country,
        value: trip.id
      }))
      return tripList
    }
  }

  //fetch to server to get trip details to show in menu
  fetchTripDetails = () => {
    let userID = localStorage.getItem('user_id')
    let token = localStorage.getItem('jwt')

    fetch(`http://localhost:3000/api/v1/users/${userID}/trip_details/${this.state.tripId || this.tripDropDown()[0].value}`,{
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`
      }
    })
    .then(resp=>resp.json())
    .then(data=> {
      console.log(data)
      this.setState({tripData: data})
      let changeVisiblility = ""
      return changeVisiblility
    })
    .then(changeVisiblility=>{
      setTimeout(()=>{
        this.setState({loader:changeVisiblility, tripDetailsVisibility:changeVisiblility})
      },2500)
    })
  }

  //seperate fetch to long lead retrieval of activity details
  fetchTripActivityDetails = () => {
    let userID = localStorage.getItem('user_id')
    let token = localStorage.getItem('jwt')

    fetch(`http://localhost:3000/api/v1/users/${userID}/trip_details/${this.state.tripId || this.tripDropDown()[0].value}/activity_data`,{
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`
      }
    })
    .then(resp=>resp.json())
    .then(data=> {
      console.log(data)
      this.setState({activityData: data.trip.activity_data})
    })
  }

  //set value of selected trip from drop down into list and trigger fetch of trip details
  handleChange = (e, { value }) => this.setState({
    tripId: value,
    loader: "ui active transition visible dimmer",
    activityData: null,
    tripDetailsVisibility: "hide-visibility" },()=>{
      this.fetchTripDetails()
      this.fetchTripActivityDetails()
    })

  render() {
    let {tripId, tripData, activityData} = this.state

    if (this.props.allTrips.length > 0 && !tripData){
      this.fetchTripDetails()
      this.fetchTripActivityDetails()
    }
    return (
      <Fragment>
      <Header as='h2' dividing>Trip Dashboard
      </Header>
      {this.props.allTrips &&this.props.allTrips.length > 0 ?
        <div>
          <Dimmer className={this.state.loader}>
            <Loader size='massive'>Searching for the latest trip info...</Loader>
          </Dimmer>
          <Header as='h3'>
            <Header.Content>
              <Dropdown
                onChange={this.handleChange}
                inline
                options={this.tripDropDown()}
                defaultValue={this.tripDropDown()[0].value}
                value={tripId}
              />
            </Header.Content>
          </Header>
          <TripDetailContainer className={this.state.tripDetailsVisibility} tripData={tripData} activityData={activityData} refreshTrips={this.props.refreshTrips}/>
        </div>
      :
        <span>You don't have any saved trips. Use the form below to enter any destination you want to visit.</span>
      }
    </Fragment>
    );
  }
}
export default TripDashboard;
