import React, {Component, Fragment} from 'react';
import TripDetailContainer from './TripDetailContainer';
import { Container, Header, Segment, Placeholder } from 'semantic-ui-react'

class TripDashboard extends Component {
  state = {
    allTrips: []
  }

  componentDidMount() {
    this.fetchTrips()
  }

  //fetch all saved trip data
  fetchTrips=()=>{
    let userID = localStorage.getItem('user_id')
    let token = localStorage.getItem('jwt')

    fetch(`http://localhost:3000/api/v1/users/${userID}`,{
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`
      }
    })
    .then(resp=>resp.json())
    .then(data=> {
      if (data.user.trips) {
        this.setState({allTrips:data.user.trips},()=>{console.log(this.state.allTrips)})
      } else {
        return
      }
    })
  }

  render() {
    return (
      <>
      <Header as='h2' dividing>Trip Dashboard
      </Header>
      {this.state.allTrips.length > 0 ?
        <TripDetailContainer allTrips={this.state.allTrips}/>
      :
        <span>You don't have any saved trips. Use the form below to enter any destination you want to visit.</span>
      }
      </>
    );
  }
}
export default TripDashboard;
