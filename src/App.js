import React, {Component, Fragment} from 'react';
import './App.css';
import Main from './containers/Main'
import {withRouter } from 'react-router-dom';



class App extends Component {

  signOutUser = async () => {
    await this.setState({loggedIn:false},()=>console.log(this.state))
    await this.props.history.push('/')
  }

  render(){
    return (
      <Fragment>
        <div className="App">
          <Main signOutUser={this.signOutUser}/>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(App);
