import React, {Component} from 'react';
import {Item, Card,Button, Loader} from 'semantic-ui-react'
import TypicalFlightPriceGraph from './TypicalFlightPriceGraph';
import CheapestTravelMonth from './CheapestTravelMonth';
import MostPopularMonth from './MostPopularMonth';
import WeeksInAdvance from './WeeksInAdvance';
import AvgMonthlyTempTable from './AvgMonthlyTempTable';
import AvgMonthlyTempGraph from './AvgMonthlyTempGraph';
import TripHotelData from './TripHotelData';
import LodgingLinks from './LodgingLinks'
import TopRestaurants from './TopRestaurants'
import TopGolfCourses from './TopGolfCourses'
import TopHikes from './TopHikes'
import TopTouristSites from './TopTouristSites'

class TripDetail extends Component {

  state= {
    destination: '',
    tripStart: '',
    tripEnd:'',
    cardDisplay: 'cards-show',
    loaderDisplay: 'active inline'
  }

  componentDidMount=()=>{
    this.setDestinationLocation()
    this.setTripDates()
  }

  //define a destination for child components at highest level available
  setDestinationLocation=()=>{
    const {street_name, street_number, city, state, country, postal_code} = this.props.trip.destination_data

    if (city){
      this.setState({destination:city})
    } else if (state){
      this.setState({destination:state})
    } else if (country) {
      this.setState({destination:country})
    } else {
      return
    }
  }

  //set trip dates or assign default for temp lookup
  setTripDates=()=>{
    const {trip_start, trip_end} = this.props.trip
    if (trip_start && trip_end){
      this.setState({
        tripStart:trip_start,
        tripEnd: trip_end
      })
    } else{
      this.setState({
        tripStart:'2019-09-01',
        tripEnd: '2019-09-15'
      })
    }
  }

  //callback to pass to skyscanner widget to hide detail display on load
  hideDetailsOnWidgetLoad=()=>{
    setTimeout(()=>{
      this.setState({cardDisplay: 'cards-hidden'})
      this.setState({loaderDisplay: ''})
    },3000)
  }

  //Show/hide trip details on click
  handleClick=(ev)=>{
    this.state.cardDisplay === 'cards-show' ? this.setState({cardDisplay: 'cards-hidden'}) : this.setState({cardDisplay: 'cards-show'})
  }

  render() {

    const {destination, tripStart, tripEnd, cardDisplay, loaderDisplay} = this.state
    const {city, avg_monthly_temperature} = this.props.trip.destination_data
    console.log(this.props)

    return (
        <Item>
          <Item.Content>

            <Loader className={loaderDisplay} />

            <Item.Header as='h6'>
              {city}
            </Item.Header>
            <Item.Description>
              {cardDisplay ==='cards-hidden' ?
                <button type="button" className="onClick-button" onClick={(ev)=>this.handleClick(ev)}>See more </button>
              : <button type="button" className="onClick-button" onClick={(ev)=>this.handleClick(ev)}>See less</button>
              }
            </Item.Description>
              <Item.Extra id={cardDisplay}>
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Estimated Flight Price</Item.Header>
                      <TypicalFlightPriceGraph destination={`"'${destination}'"`}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Cheapest Month To Travel</Item.Header>
                      <CheapestTravelMonth destination={`"'${destination}'"`}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Most Popular Travel Month</Item.Header>
                      <MostPopularMonth destination={`"'${destination}'"`}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">When To Book</Item.Header>
                      <WeeksInAdvance destination={`"'${destination}'"`} changeCardDisplay={this.hideDetailsOnWidgetLoad}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Average Temperature</Item.Header>
                      <AvgMonthlyTempGraph temps={avg_monthly_temperature}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <TripHotelData hotelData={this.props.hotelData} />
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <LodgingLinks destination={destination} tripStart={tripStart} tripEnd={tripEnd} />
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <TopRestaurants data={this.props.activityData} />
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <TopHikes data={this.props.activityData} />
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <TopGolfCourses data={this.props.activityData} />
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <TopTouristSites data={this.props.activityData} />
                    </Card.Content>
                  </Card>
                </Card.Group>
            </Item.Extra>
          </Item.Content>
        </Item>

    );
  }
}
export default TripDetail;


///Things to show in cards:
//2. hotels, 3. best weather
