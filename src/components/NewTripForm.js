 import React, {Component} from 'react';
 import { Button, Form, Container, Input, Divider, Header, Segment, Grid} from 'semantic-ui-react'
 import LocationSearchBar from './LocationSearchBar';


 class NewTripForm extends Component {

   state = {
     location:{},
     tripStartDate :'',
     tripEndDate: ''
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
  handleInputChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  //eliminates default value for date on click
  resetDateOnClick= e => {
    e.target.value = ""
  }

  //submit handler to create an object to post to the database
  handleTripSubmit=(ev)=>{
    let token = localStorage.getItem('jwt')
    let userID = localStorage.getItem('user_id')

    ev.preventDefault()
    fetch(`http://localhost:3000/api/v1/destinations`,{
      method: 'POST',
      headers:{
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
          destination:{
          street_number: this.state.location.street_number || null,
          street_name: this.state.location.route || null,
          city: this.state.location.locality ||null ,
          state: this.state.location.administrative_area_level_1 ||null ,
          country:this.state.location.country || null,
          postal_code: this.state.location.postal_code || null ,
          latitude: this.state.location.coordinates.lat,
          longitude: this.state.location.coordinates.long,
          trips_attributes:[
            {trip_start:this.state.tripStartDate || this.tripStartDatePlaceholder(),
            trip_end:this.state.tripEndDate ||this.tripEndDatePlaceholder(),
              user_id: userID
            }
          ]
        }
      })
    })
  }


   render() {

     let startDate = this.tripStartDatePlaceholder()
     let endDate = this.tripEndDatePlaceholder()

     return (
      <Container>
        <Header as='h2' dividing>Create New Trip</Header>
        <Header as='h5'>Add Destination</Header>
        <Segment basic>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Header as='h5'>Quick Search</Header>
                <LocationSearchBar autoFillHandler={this.autoFillAddressForm} />
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Button><Header as='h6'>Manual Input</Header></Button>
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
        <Divider hidden ></Divider>
        <Form onSubmit={(ev)=>this.handleTripSubmit(ev)}>
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
         <Form.Field>
           <Input label="Start Date" name="tripStartDate" type="date" onChange={(e)=>this.handleInputChange(e)} value=''/>
         </Form.Field>
         <Form.Field>
           <Input label="End Date" name="tripEndDate" type="date" onChange={(e)=>this.handleInputChange(e)} value='' />
           <span><i>Trip dates will default to {startDate} - {endDate} if you do not change.</i></span>
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

 export default NewTripForm;


// TO DO:

  // <Form.Field>
  //   <Dropdown text="Select Trip Category" fluid selection options={tripCategoryOptions}/>
  // </Form.Field>
