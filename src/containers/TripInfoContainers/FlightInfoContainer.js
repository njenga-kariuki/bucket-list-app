import React, {Component} from 'react';
import {Card,Item} from 'semantic-ui-react'
import TypicalFlightPriceGraph from '../../components/TypicalFlightPriceGraph'
import CheapestTravelMonth from '../../components/CheapestTravelMonth'
import MostPopularMonth from '../../components/MostPopularMonth'
import WeeksInAdvance from '../../components/WeeksInAdvance'

class FlightInfoContainer extends Component {
  render() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Item.Header id="temp-header" size="tiny">Estimated Flight Price</Item.Header>
            <TypicalFlightPriceGraph destination={`"'${this.props.destination}'"`}/>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Item.Header id="temp-header" size="tiny">Cheapest Month To Travel</Item.Header>
            <CheapestTravelMonth destination={`"'${this.props.destination}'"`}/>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Item.Header id="temp-header" size="tiny">Most Popular Travel Month</Item.Header>
            <MostPopularMonth destination={`"'${this.props.destination}'"`}/>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Item.Header id="temp-header" size="tiny">When To Book</Item.Header>
            <WeeksInAdvance destination={`"'${this.props.destination}'"`} changeCardDisplay={this.props.changeCardDisplay}/>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default FlightInfoContainer;
