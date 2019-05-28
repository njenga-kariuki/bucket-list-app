import React, {Component,Fragment} from 'react';
import {Item,Header} from 'semantic-ui-react'

class FlightSummary extends Component {

  printArrayData = (arr) => {
    if (Array.isArray(arr)){
      return arr.map((item,index)=> index===arr.length-1? <span>{item}</span> : <span>{item},</span>)
    } else {
      return <span>None</span>
    }
  }

  render() {
    const {flight_time, flight_distance, nearby_airports, direct_flights} = this.props.flightInfo.flightInfo

    return (
      <Fragment>
        {this.props.flightInfo ?
          <Item>
            <Item.Meta>
              {flight_time && <span><Header as='h6'>Flight Time: {flight_time}</Header></span>}
              {flight_distance && <span><Header as='h6'>Flight Distance: {flight_distance}</Header></span>}
              {nearby_airports && <span><Header as='h6'>Nearby Airports: {this.printArrayData(nearby_airports)}</Header></span>}
              <span><Header as='h6'>Direct Flights: {this.printArrayData(direct_flights)}</Header></span>
            </Item.Meta>

          </Item>
        : <span></span>
        }
      </Fragment>
    )
  }
}

export default FlightSummary;

// <span>Nearby Airports: {nearby_airports.length > 1 ? this.printArrayData(nearby_airports): nearby_airports}</span>
