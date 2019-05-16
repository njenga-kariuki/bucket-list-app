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
    if (this.props.trip.destination.city){
      this.setState({destination:this.props.trip.destination.city},()=>{console.log(this.state)})
    } else if (this.props.trip.destination.state){
      this.setState({destination:this.props.trip.destination.state})
    } else if (this.props.trip.destination.country) {
      this.setState({destination:this.props.trip.destination.country})
    } else {
      return
    }
  }

  //set trip dates or assign default for temp lookup
  setTripDates=()=>{
    if (this.props.trip.trip_start && this.props.trip.trip_end){
      this.setState({
        tripStart:this.props.trip.trip_start,
        tripEnd: this.props.trip.trip_end
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
    return (
        <Item>
          <Item.Content>

            <Loader className={this.state.loaderDisplay} />

            <Item.Header as='h6'>
              {this.props.trip.destination.city}
            </Item.Header>
            <Item.Description>
              {this.state.cardDisplay ==='cards-hidden' ?
                <button type="button" className="onClick-button" onClick={(ev)=>this.handleClick(ev)}>See more </button>
              : <button type="button" className="onClick-button" onClick={(ev)=>this.handleClick(ev)}>See less</button>
              }
            </Item.Description>
              <Item.Extra id={this.state.cardDisplay}>
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Estimated Flight Price</Item.Header>
                      <TypicalFlightPriceGraph destination={`"'${this.state.destination}'"`}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Cheapest Month To Travel</Item.Header>
                      <CheapestTravelMonth destination={`"'${this.state.destination}'"`}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Most Popular Travel Month</Item.Header>
                      <MostPopularMonth destination={`"'${this.state.destination}'"`}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">When To Book</Item.Header>
                      <WeeksInAdvance destination={`"'${this.state.destination}'"`} changeCardDisplay={this.hideDetailsOnWidgetLoad}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Item.Header id="temp-header" size="tiny">Average Temperature</Item.Header>
                      <AvgMonthlyTempGraph temps={this.props.trip.destination.avg_monthly_temperature}/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <TripHotelData hotelData={this.props.hotelData} />
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <LodgingLinks destination={this.state.destination} tripStart={this.state.tripStart} tripEnd={this.state.tripEnd} />
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
