import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react'
import {  Route } from 'react-router-dom';
import LandingPageContainer from './LandingPageContainer';
import TripProfileContainer from './TripProfileContainer';

class Main extends Component {
  render() {
    return (
      <>
        <Route
          component={LandingPageContainer}
          exact
          path='/'>
        </Route>
        <Route
          component={TripProfileContainer}
          exact
          path='/profile/:userId'>
        </Route>
      </>
    );
  }
}

export default Main;
