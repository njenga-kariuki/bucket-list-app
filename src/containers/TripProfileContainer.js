//contains trip dashboard and form -- future iteration will customize for the user

import React,{Component, Fragment} from 'react';
import NewTripForm from '../components/NewTripForm';
import TripDashboard from '../containers/TripDashboard';
import {Divider} from 'semantic-ui-react'

class TripProfileContainer extends Component {
  state = {
    allTrips: []
  }

  componentDidMount() {
    this.fetchTrips()
  }
  //fetch all saved trip data - detailed version
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

  render(){
    return (
      <Fragment>
        <TripDashboard allTrips={this.state.allTrips} />
        <Divider hidden/>
        <NewTripForm refreshTrips={this.fetchTrips} />
      </Fragment>
    );
  }

}

export default TripProfileContainer;
