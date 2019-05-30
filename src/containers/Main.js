import React, {Component, Fragment} from 'react';
// import { Redirect } from 'react-router-dom'
// import { Container, Header } from 'semantic-ui-react'
import {  Route } from 'react-router-dom';
import LandingPageContainer from './LandingPageContainer';
import TripProfileContainer from './TripProfileContainer';
import NavBar from '../components/NavBar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Main extends Component {
  state = {
    loggedIn: false
  }

  handleSignOut = async () => {
    await localStorage.clear()
    await this.setState({loggedIn:false})
    await this.props.signOutUser()
  }

  checkUser = () => {
    if (localStorage.getItem('jwt')){
      this.setState({loggedIn:true})
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.loggedIn ?
          <NavBar handleSignOut={this.handleSignOut} />
        : this.checkUser()
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
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          closeButton={false}
        />
      </Fragment>
    );
  }
}

export default Main;
