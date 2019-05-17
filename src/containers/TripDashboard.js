import React, {Component, Fragment} from 'react';
import TripDetailContainer from './TripDetailContainer';
import { Container, Header } from 'semantic-ui-react'

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
    .then(data=>this.setState({allTrips:data.user.trips},()=>{console.log(this.state.allTrips)}))
  }

  render() {
    return (
      <>
      <Header as='h2' dividing>Trip Dashboard
      </Header>
        <TripDetailContainer allTrips={this.state.allTrips}/>
      </>
    );
  }
}
export default TripDashboard;
