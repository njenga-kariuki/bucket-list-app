//contains trip dashboard and form -- future iteration will customize for the user

import React,{Component, Fragment} from 'react';
import NewTripForm from '../components/NewTripForm';
import TripDashboard from '../containers/TripDashboard';
import {Divider} from 'semantic-ui-react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, animateScroll as scroll } from 'react-scroll'

class TripProfileContainer extends Component {
  state = {
    allTrips: [],
    defaultAirportCode: '',
    defaultDepartureCity: ''
  }

  componentDidMount() {
    this.welcomeToast()
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
        this.setState({
          allTrips:data.user.trips,
          defaultAirportCode: data.user.default_airport_code,
          defaultDepartureCity: data.user.default_departure_city
        },()=>{console.log(this.state)})
      } else {
        return
      }
    })
  }

  //renders toast for new trip creation on succes
  newTripToast = () => toast.success("New trip added!")

  //renders welcome when users profile mounts the first time
  welcomeToast = () => toast.success("Welcome!")

  //prop function to scroll page to top after new trip creation
  scrollTop = () => scroll.scrollToTop()

  render(){
    const {allTrips, defaultAirportCode, defaultDepartureCity} = this.state
    return (
      <Fragment>
        <TripDashboard allTrips={allTrips} refreshTrips={this.fetchTrips} />
        <Divider hidden/>
        <NewTripForm refreshTrips={this.fetchTrips} defaultAirportCode={defaultAirportCode} defaultDepartureCity={defaultDepartureCity} renderToast={this.newTripToast} scrollTop={this.scrollTop} />
      </Fragment>
    );
  }

}

export default TripProfileContainer;
