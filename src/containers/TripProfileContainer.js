//contains trip dashboard and form -- future iteration will customize for the user

import React,{Component, Fragment} from 'react';
import NewTripForm from '../components/NewTripForm';
import TripDashboard from '../containers/TripDashboard';
import {Divider} from 'semantic-ui-react'

class TripProfileContainer extends Component {
  render(){
    return (
      <Fragment>
        <TripDashboard />
        <Divider hidden/>
        <NewTripForm />
      </Fragment>
    );
  }

}

export default TripProfileContainer;
