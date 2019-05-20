//contains trip dashboard and form -- future iteration will customize for the user

import React,{Component} from 'react';
import NewTripForm from '../components/NewTripForm';
import TripDashboard from '../containers/TripDashboard';
import {Container, Divider} from 'semantic-ui-react'

class TripProfileContainer extends Component {
  render(){
    return (
      <>
        <TripDashboard />
        <Divider hidden/>
        <NewTripForm />
      </>
    );
  }

}

export default TripProfileContainer;
