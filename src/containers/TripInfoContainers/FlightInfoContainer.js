import React, {Component,Fragment} from 'react';
import {Card,Item} from 'semantic-ui-react'
import TypicalFlightPriceGraph from '../../components/TypicalFlightPriceGraph'
import CheapestTravelMonth from '../../components/CheapestTravelMonth'
import MostPopularMonth from '../../components/MostPopularMonth'
import WeeksInAdvance from '../../components/WeeksInAdvance'
import FlightSummary from '../../components/FlightSummary'

class FlightInfoContainer extends Component {

  state = {}

  componentDidMount=()=>{
    this.setDestinationLocation()
  }

  componentDidUpdate = () => {
    if (this.props.destination !== this.state.destination){
      this.setDestinationLocation()
    }
  }

  //define a destination for child components at highest level available
  setDestinationLocation=()=>{
    this.setState({destination: this.props.destination})
  }

  render() {
    return (
      <Fragment>
        <FlightSummary flightInfo={this.props}/>
        <Card.Group>
          <Card>
            <Card.Content>
              <Item.Header id="temp-header" size="tiny">Estimated Flight Price</Item.Header>
              <TypicalFlightPriceGraph destination={`"'${this.props.destination}'"`} latitude={this.props.latitude} longitude={this.props.longitude}/>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Item.Header id="temp-header" size="tiny">Cheapest Month To Travel</Item.Header>
              <CheapestTravelMonth destination={`"'${this.props.destination}'"`} latitude={this.props.latitude} longitude={this.props.longitude}/>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Item.Header id="temp-header" size="tiny">Most Popular Travel Month</Item.Header>
              <MostPopularMonth destination={`"'${this.props.destination}'"`} latitude={this.props.latitude} longitude={this.props.longitude}/>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Item.Header id="temp-header" size="tiny">When To Book</Item.Header>
              <WeeksInAdvance destination={`"'${this.props.destination}'"`} changeCardDisplay={this.props.changeCardDisplay} latitude={this.props.latitude} longitude={this.props.longitude}/>
            </Card.Content>
          </Card>
        </Card.Group>
      </Fragment>
    )
  }
}

export default FlightInfoContainer;
