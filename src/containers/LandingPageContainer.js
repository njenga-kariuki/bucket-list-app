import React, {Component, Fragment} from 'react';
import {Container, Header,Button} from 'semantic-ui-react'
import TripDetail from '../components/TripDetails';
import ValuePropCarousel from '../components/ValuePropCarousel';
import ValuePropSteps from '../components/ValuePropSteps';
import TripProfileContainer from './TripProfileContainer';
import AuthorizationContainer from './AuthorizationContainer';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import {  NavLink, Link } from 'react-router-dom';

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
      last_name: userInput.lasttName,
      username: userInput.username,
      email: userInput.email,
      password:userInput.password,
      preffered_hotel_1:userInput.hotelPref1,
      preffered_airline_1:userInput.preffered_airline_1
      }
    })
  })
  .then(resp => resp.json())
  .then(data=>{
    localStorage.setItem('jwt',data.jwt)
    localStorage.setItem('user_id',data.user.id)
  })
  .then(console.log(localStorage.getItem('jwt')))
  .then(console.log(localStorage.getItem('user_id')))
  .then(this.props.history.push(`/profile/${localStorage.getItem('user_id')}`))
  }

  render() {
    return (
      <Container>
        <Header as='h1' id="landing-page-header">Travel-Ease</Header>
        <Header as='h2'><i>We do the research. You do the travel.</i></Header>
        <ValuePropCarousel/>
        <ValuePropSteps/>
        <AuthorizationContainer handleUserLogin={this.handleUserLogin} handleCreateAccount={this.handleCreateAccount}/>
      </Container>
    )
  }
}

export default LandingPageContainer;
