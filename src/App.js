import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react'
import NewTripForm from './components/NewTripForm';
import TripDashboard from './containers/TripDashboard';
import LandingPageContainer from './containers/LandingPageContainer';

import Main from './containers/Main'

import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import {  Route } from 'react-router-dom';
import TripProfileContainer from './containers/TripProfileContainer';


function App() {
  return (
    <>
      <Container text className="App">
        <Main/>
      </Container>
    </> 
  );
}

export default App;


//add to line 13 to restore//
// <LandingPageContainer />
// <TripDashboard />
// <NewTripForm />
