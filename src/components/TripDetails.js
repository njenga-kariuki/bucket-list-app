import React, {Component, Fragment} from 'react';
import {Item, Card,Loader, Segment} from 'semantic-ui-react'
import DestinationMap from './DestinationMap'
import TripDetailMenu from './TripDetailMenu'
import GeneralInfoContainer from '../containers/TripInfoContainers/GeneralInfoContainer';
import ActivityInfoContainer from '../containers/TripInfoContainers/ActivityInfoContainer';
import LodgingInfoContainer from '../containers/TripInfoContainers/LodgingInfoContainer';
import FlightInfoContainer from '../containers/TripInfoContainers/FlightInfoContainer';
import Script from 'react-load-script';


class TripDetail extends Component {

  state= {
    destination: '',
    tripStart: '',
    tripEnd:'',
    cardDisplay: 'cards-show',
    loaderDisplay: 'active inline',
    activeMenuItem: 'Flights'
  }

  componentDidMount=()=>{
    this.setDestinationLocation()
    this.setTripDates()
  }

  componentDidUpdate = () => {
    const {city, state, country} = this.props.trip.trip.destination_data

    if (city){
      if (this.state.destination !== city){
        this.setState({destination:city})
      }
    } else if (state){
      if (this.state.destination !== state){
        this.setState({destination:state})
      }
    } else if (country) {
      if (this.state.destination !== country){
        this.setState({destination:country})
      }
    } else {
      return
    }
  }

  //define a destination for child components at highest level available
  setDestinationLocation=()=>{
    const {city, state, country} = this.props.trip.trip.destination_data

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
      // this.setState({cardDisplay: 'cards-hidden'})
      this.setState({loaderDisplay: ''})
    },3000)
  }

  //Show/hide trip details on click
  handleClick=(ev)=>{
    this.state.cardDisplay === 'cards-show' ? this.setState({cardDisplay: 'cards-hidden'}) : this.setState({cardDisplay: 'cards-show'})
  }

  //handles click on category menu
  handleMenuClick = (e, { name }) => this.setState({ activeMenuItem: name })

  //conditional render logic for trip info categories
  renderCategory = () => {
    const {destination, tripStart, tripEnd, activeMenuItem} = this.state
    const {avg_monthly_temperature, latitude, longitude} = this.props.trip.trip.destination_data

    switch (activeMenuItem){
      case 'Flights':
        return (
          <div>
            <FlightInfoContainer destination={destination} flightInfo={this.props.trip.trip.flight_summary} changeCardDisplay={this.hideDetailsOnWidgetLoad}/>
            <GeneralInfoContainer temps={avg_monthly_temperature}/>
          </div>
          )
      case 'Lodging':
        return <LodgingInfoContainer hotelData={this.props.hotelData} destination={destination} tripStart={tripStart} tripEnd={tripEnd}/>
      case 'Activities':
        return <ActivityInfoContainer data={this.props.activityData}/>
      case 'Map':
        return <DestinationMap latitude={latitude} longitude={longitude} />
      default:
        return
    }
  }

  render() {
    const {tripStart, tripEnd, cardDisplay, loaderDisplay, activeMenuItem} = this.state
    const {city,state} = this.props.trip.trip.destination_data

    return (
      <Item>
        <Item.Content>
          <Loader className={loaderDisplay} />
          <Item.Header as='h6'>
            <Item.Meta id='meta-subtext'><i>{`${tripStart.slice(5,10)} -  ${tripEnd.slice(5,10)}`}</i></Item.Meta>
            {<TripDetailMenu handleItemClick={this.handleMenuClick} activeItem={activeMenuItem}/>}
          </Item.Header>
          <Item.Description>
            {cardDisplay ==='cards-hidden' ?
              <button type="button" className="onClick-button" onClick={(ev)=>this.handleClick(ev)}>See more </button>
            : <button type="button" className="onClick-button" onClick={(ev)=>this.handleClick(ev)}>See less</button>
            }
          </Item.Description>
          <Item.Extra id={cardDisplay}>
            {this.renderCategory()}
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}
export default TripDetail;
