import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import TripHotelData from '../../components/TripHotelData'
import LodgingLinks from '../../components/LodgingLinks'

class LodgingInfoContainer extends Component {
  render() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <TripHotelData hotelData={this.props.hotelData} />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <LodgingLinks destination={this.props.destination} tripStart={this.props.tripStart} tripEnd={this.props.tripEnd} />
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default LodgingInfoContainer;
