//contains trip dashboard and form -- future iteration will customize for the user

import React,{Component} from 'react';
import NewTripForm from '../components/NewTripForm';
import TripDashboard from '../containers/TripDashboard';
import {Container} from 'semantic-ui-react'



class TripProfileContainer extends Component {
  render(){
    return (
      <Container>
          <TripDashboard />
          <NewTripForm />
      </Container>
    );
  }

}

export default TripProfileContainer;
