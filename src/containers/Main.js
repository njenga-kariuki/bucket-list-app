import React, {Component, Fragment} from 'react';
// import { Redirect } from 'react-router-dom'
// import { Container, Header } from 'semantic-ui-react'
import {  Route } from 'react-router-dom';
import LandingPageContainer from './LandingPageContainer';
import TripProfileContainer from './TripProfileContainer';
import NavBar from '../components/NavBar';

class Main extends Component {

  state = {
    loggedIn: false
  }

  handleSignOut = async () => {
    await localStorage.clear()
    await this.setState({loggedIn:false})
    await this.props.signOutUser()
  }

  someFunction = () => {
    if (localStorage.getItem('jwt')){
      this.setState({loggedIn:true})
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.loggedIn ?
          <NavBar handleSignOut={this.handleSignOut} />
        : this.someFunction()
        }
        <Route
          component={LandingPageContainer}
          exact
          path='/'>
        </Route>
        <Route
          component={TripProfileContainer}
          exact
          path='/profile/'>
        </Route>
      </Fragment>
    );
  }
}

export default Main;
