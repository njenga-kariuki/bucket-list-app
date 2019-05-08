import React, {Component, Fragment} from 'react';
import TripDetailContainer from './TripDetailContainer';

class TripDashboard extends Component {
  state = {
    allTrips: [],
    allHotelData: [],
    allActivityData:[]
  }

  componentDidMount() {
    this.fetchTrips()
    this.fetchHotelData()
    this.fetchActivityData()
  }

  ///function to fetch all existing trip
  fetchTrips=()=>{
    fetch('http://localhost:3000/api/v1/trips')
    .then(resp=>resp.json())
    .then(data=>this.setState({allTrips:data}))
  }

  //fetch hotels from server
  fetchHotelData=()=>{
    fetch('http://localhost:3000/api/v1/trips/hotel_data')
    .then(resp=>resp.json())
    .then(data=>this.setState({allHotelData:data},()=>console.log(this.state.allHotelData)))
  }

  //fetch activity from server
  fetchActivityData=()=>{
    fetch('http://localhost:3000/api/v1/trips/activity_data')
    .then(resp=>resp.json())
    .then(data=>this.setState({allActivityData:data},()=>console.log(this.state.allActivityData)))
  }

  render() {
    return (
      <>
        <TripDetailContainer allTrips={this.state.allTrips} tripHotelData={this.state.allHotelData}
          activityData={this.state.allActivityData}/>
      </>
    );
  }
}
export default TripDashboard;
