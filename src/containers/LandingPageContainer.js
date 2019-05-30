import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react'
import ValuePropCarousel from '../components/ValuePropCarousel';
import ValuePropSteps from '../components/ValuePropSteps';
import AuthorizationContainer from './AuthorizationContainer';


class LandingPageContainer extends Component {

  //authenticate user login and save token to local storage
  handleUserLogin = (userInput) => {
    console.log('in login fetch')
    fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: userInput
    })
  })
  .then(resp => resp.json())
  .then(data=>{
    localStorage.setItem('jwt',data.jwt)
    localStorage.setItem('user_id',data.user.id)
    localStorage.setItem('userFirstName', data.user.first_name)
    return localStorage.getItem('jwt')
  })
  .then(jwt=>{
    console.log(jwt)
    return localStorage.getItem('user_id')
  })
  .then(userId=>this.props.history.push(`/profile`))
  }

  //post to create new user account
  handleCreateAccount = (userInput) => {
    fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        first_name: userInput.firstName,
        last_name: userInput.lastName,
        username: userInput.username,
        password:userInput.password,
        preffered_hotel_1:userInput.hotelPref1,
        preffered_airline_1:userInput.airlinePref1,
        default_departure_city:userInput.defaultDepartureCity,
        default_airport_code:userInput.defaultAirportCode,
        preferred_activities: userInput.activities,
        preferred_accomodations: userInput.accomodations
      }
    })
  })
  .then(resp => resp.json())
  .then(data=>{
    localStorage.setItem('jwt',data.jwt)
    localStorage.setItem('user_id',data.user.id)
    localStorage.setItem('userFirstName', data.user.first_name)
    console.log(localStorage.getItem('jwt'))
    let userId = localStorage.getItem('user_id')
    return userId
  })
  .then(userId=>this.props.history.push(`/profile`))
  }

  render() {
    return (
      <Container>
        <Header as='h1' id="landing-page-header">Travel-Ease</Header>
        <Header as='h2'><i>Tell us how you like to travel. We do your research.</i></Header>
        <ValuePropCarousel/>
        <ValuePropSteps/>
        <AuthorizationContainer handleUserLogin={this.handleUserLogin} handleCreateAccount={this.handleCreateAccount}/>
      </Container>
    )
  }
}

export default LandingPageContainer;
