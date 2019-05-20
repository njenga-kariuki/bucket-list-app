import React, {Component} from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react'
import NewTripForm from './components/NewTripForm';
import TripDashboard from './containers/TripDashboard';
import LandingPageContainer from './containers/LandingPageContainer';
import Main from './containers/Main'
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';
import TripProfileContainer from './containers/TripProfileContainer';


class App extends Component {

  signOutUser = async () => {
    await this.setState({loggedIn:false},()=>console.log(this.state))
    await this.props.history.push('/')
  }

  render(){
    return (
      <>
        <div className="App">
          <Main signOutUser={this.signOutUser}/>
        </div>
      </>
    )
  }
}

export default withRouter(App);
