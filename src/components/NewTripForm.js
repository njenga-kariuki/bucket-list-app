 import React, {Component} from 'react';
 import { Button, Form, Container, Input, Divider, Header, Popup} from 'semantic-ui-react'
 import LocationSearchBar from './LocationSearchBar';
 import {withRouter } from 'react-router-dom';


 class NewTripForm extends Component {

   state = {
     location:{},
     tripStartDate :'',
     tripEndDate:'',
     numTravelers: null,
     departureCity: '',
     departureAirportCode: ''
   }
   //autofill using the search autocomplete to find the right form inputs
   autoFillAddressForm = (addressObject) => {
    let locationObject = {}
    let componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'long_name',
      country: 'long_name',
      postal_code: 'short_name'
    }
    for (var component in componentForm) {
      document.getElementById(component).value = '';
    }
    for (let i = 0; i < addressObject.address_components.length; i++) {
      let addressType = addressObject.address_components[i].types[0];
      if (componentForm[addressType]) {
        let val = addressObject.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
        locationObject[addressType] = val
      }
    }
    locationObject['coordinates'] = addressObject.coordinates
    this.setState({location:locationObject})
  }

  //defaults trip start date to +30 days from today
  tripStartDatePlaceholder = () => {
    let placeholderTripStart = new Date();
    placeholderTripStart.setDate(placeholderTripStart.getDate()+30)
    let dd = String(placeholderTripStart.getDate()).padStart(2, '0');
    let mm = String(placeholderTripStart.getMonth() + 1).padStart(2, '0');
    let yyyy = placeholderTripStart.getFullYear();
    placeholderTripStart = yyyy + '-' + mm + '-' + dd;
    return placeholderTripStart
  }

  //defaults trip start date to +40 days from today
  tripEndDatePlaceholder = () => {
    let placeholderTripEnd = new Date();
    placeholderTripEnd.setDate(placeholderTripEnd.getDate()+40)
    let dd = String(placeholderTripEnd.getDate()).padStart(2, '0');
    let mm = String(placeholderTripEnd.getMonth() + 1).padStart(2, '0');
    let yyyy = placeholderTripEnd.getFullYear();
    placeholderTripEnd = yyyy + '-' + mm + '-' + dd;
    return placeholderTripEnd
  }

  //sets date changes into state (since location object set seperately)
  handleInputChange = e => this.setState({[e.target.name]:e.target.value})

  //eliminates default value for date on click
  resetDateOnClick= e => e.target.value = ""

  //submit handler to create an object to post to the database
  handleTripSubmit=(e)=>{
    e.preventDefault()
    const {location,tripStartDate,tripEndDate,numTravelers,departureCity,departureAirportCode} = this.state
    let token = localStorage.getItem('jwt')
    let userID = localStorage.getItem('user_id')

    fetch(`http://localhost:3000/api/v1/destinations`,{
      method: 'POST',
      headers:{
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        destination:{
        street_number: location.street_number || null,
        street_name: location.route || null,
        city: location.locality ||null ,
        state: location.administrative_area_level_1 ||null ,
        country:location.country || null,
        postal_code: location.postal_code || null ,
        latitude: location.coordinates.lat,
        longitude: location.coordinates.long,
        trips_attributes:[
          {trip_start:tripStartDate || this.tripStartDatePlaceholder(),
          trip_end:tripEndDate ||this.tripEndDatePlaceholder(),
          user_id: userID,
          departure_location: departureCity || this.props.defaultDepartureCity,
          departure_airport_code: departureAirportCode || this.props.defaultAirportCode,
          number_travelers: numTravelers || 2
          }
        ]
      }
      })
    })
    .then(data=>{
      debugger
      this.props.refreshTrips()
      this.props.renderToast()
      this.props.scrollTop()
    })
  }

   render() {
     let startDate = this.tripStartDatePlaceholder().substr(5,10)
     let endDate = this.tripEndDatePlaceholder().substr(5,10)
     const {tripStartDate, tripEndDate} = this.state

     return (
      <Container>
        <Header as='h2' dividing>Create New Trip</Header>
        <Header as='h5'>Add Destination</Header>
          <Popup
            trigger={<div id="test"><LocationSearchBar autoFillHandler={this.autoFillAddressForm} /></div>}
            content='Start typing and select from list.'
            on='focus'
         />
        <Divider hidden/>
        <Form onSubmit={(e)=>this.handleTripSubmit(e)}>
         <Form.Field hidden>
           <Input label="Street Number" id="street_number" type="text" placeholder="Street Number"></Input>
         </Form.Field>
         <Form.Field hidden>
           <Input label="Street Name" id="route" type="text" placeholder="Street Name"></Input>
         </Form.Field>
         <Form.Field hidden>
           <Input label="City" id="locality" type="text" placeholder="City"></Input>
         </Form.Field>
         <Form.Field hidden>
           <Input label="State" id="administrative_area_level_1" type="text" placeholder="State"></Input>
         </Form.Field>
         <Form.Field hidden>
           <Input label="Country" id="country" type="text" placeholder="Country"></Input>
         </Form.Field>
         <Form.Field hidden>
           <Input label="Postal Code" type="text"placeholder='Postal Code' id="postal_code" />
         </Form.Field>
         <Header as='h5'>Optional Trip Details</Header>
         <Form.Field>
           <Popup
             trigger={<Input label="Start Date" name="tripStartDate" type="date" onChange={(e)=>this.handleInputChange(e)} value={tripStartDate}/>}
             content={<span><i>Optional: dates will default to {startDate} - {endDate}.</i></span>}
             on='focus'
          />
         </Form.Field>
         <Form.Field>
           <Popup
             trigger={<Input label="End Date" name="tripEndDate" type="date" onChange={(e)=>this.handleInputChange(e)} value={tripEndDate}/>}
             content={<span><i>Optional: dates will default to {startDate} - {endDate}.</i></span>}
             on='focus'
          />
         </Form.Field>
         <Form.Field >
           <Popup
             trigger={<Input label="Number of Travelers" type="number" placeholder="2" id="numTravelers" name="numTravelers" onChange={(e)=>this.handleInputChange(e)} />}
             content={<span><i>Optional: default is 2.</i></span>}
             on='focus'
           />
         </Form.Field>
         <Form.Field>
           <Popup
             trigger={<Input label="Departure City" type="text" name="departureCity" placeholder={this.props.defaultDepartureCity} id="departureCity" onChange={(e)=>this.handleInputChange(e)} />}
             content={<span><i>Optional: default is {this.props.defaultDepartureCity}.</i></span>}
             on='focus'
           />
         </Form.Field>
         <Form.Field>
           <Popup
             trigger={<Input label="Departure Airport Code" type="text" name="departureAirportCode" placeholder={this.props.defaultAirportCode} id="departureAirportCode" onChange={(e)=>this.handleInputChange(e)} />}
             content={<span><i>Optional: default is {this.props.defaultAirportCode}.</i></span>}
             on='focus'
           />
         </Form.Field>
         <Button
           type='submit'
           disabled={
             !this.state.location.country
           }
           >Create Trip
         </Button>
       </Form>
        <Divider horizontal></Divider>
      </Container>
     )
   }
 }

 export default withRouter(NewTripForm);
