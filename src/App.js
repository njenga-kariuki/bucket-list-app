import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react'
import NewTripForm from './components/NewTripForm';
import TripDashboard from './containers/TripDashboard';

function App() {
  return (
    <Container className="App">
        <Header as='h2' dividing>Trip Dashboard
        </Header>
        <TripDashboard />
          <Header as='h2' dividing>Create New Trip
          </Header>
        <NewTripForm />
    </Container>
  );
}

export default App;
