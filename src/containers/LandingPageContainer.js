import React, {Component, Fragment} from 'react';
import {Container, Header,Button} from 'semantic-ui-react'
import TripDetail from '../components/TripDetails';
import ValuePropCarousel from '../components/ValuePropCarousel';
import ValuePropSteps from '../components/ValuePropSteps';
import TripProfileContainer from './TripProfileContainer';

import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import {  NavLink, Link } from 'react-router-dom';


class LandingPageContainer extends Component {
  render() {
    return (
      <>

          <Header as='h1' id="landing-page-header">Travel-Ease</Header>
          <ValuePropSteps/>
          <Button as={Link} to="/profile" secondary size='large'>Get Started</Button>
      </>
    )
  }
}

export default LandingPageContainer;
