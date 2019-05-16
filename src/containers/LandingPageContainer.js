import React, {Component, Fragment} from 'react';
import {Container, Header,Button} from 'semantic-ui-react'
import TripDetail from '../components/TripDetails';
import ValuePropCarousel from '../components/ValuePropCarousel';
import ValuePropSteps from '../components/ValuePropSteps';
import TripProfileContainer from './TripProfileContainer';
import LoginForm from '../components/LoginForm'

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
  .then(data=>localStorage.setItem('jwt',data.jwt))
  .then(console.log(localStorage.getItem('jwt')))
  this.props.history.push('/profile')
  }

  render() {
    return (
      <Container>
        <Header as='h1' id="landing-page-header">Travel-Ease</Header>
        <Header as='h2'><i>We do the research. You do the travel.</i></Header>
        <ValuePropCarousel/>
        <ValuePropSteps/>
        <LoginForm handleUserLogin={this.handleUserLogin}/>
      </Container>
    )
  }
}

export default LandingPageContainer;
