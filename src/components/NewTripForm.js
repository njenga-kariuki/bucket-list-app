 import React, {Component, Fragment} from 'react';
 import { Button, Form, Container, Input, Dropdown, Divider, Header } from 'semantic-ui-react'
 import LocationSearchBar from './LocationSearchBar';
 import TypicalFlightPriceGraph from './TypicalFlightPriceGraph';

 class NewTripForm extends Component {

   state = {
     userId:1,
     location:{}
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
    this.setState({location:locationObject})
  }

  // function to set state of lookup city, state, location
  setLocationOnChange=()=>{
    if (this.state.location.locality){
      return <TypicalFlightPriceGraph destination={`"'${this.state.location.locality}'"`}/>
    } else if (this.state.location.administrative_area_level_1){
      return <TypicalFlightPriceGraph destination={this.state.location.administrative_area_level_1}/>
    } else if (this.state.location.country) {
      return <TypicalFlightPriceGraph destination={this.state.country}/>
    } else {
      return
    }
  }

  //submit handler to create an object to post to the database
  handleTripSubmit=(ev)=>{
    ev.preventDefault()
    fetch(`http://localhost:3000/api/v1/destinations`,{
      method: 'POST',
      headers:{
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
          trips_attributes:[
            {trip_start:null,
            trip_end:null,
              user_id: 1
            }
          ]
        }
      })
    })
  }

   render() {
     //trip category dropdown options
     const tripCategoryOptions = [
       {key: 'Tourist',
       text:'Tourist',
       value:'Tourist'},
       {key: 'Golfing',
       text:'Golfing',
       value:'Golfing'},
       {key: 'Family',
       text:'Family',
       value:'Family'},
       {key: 'Other',
       text:'Other',
       value:'Other'},
     ]

     return (
      <Container>
        <Header as='h2' dividing>Create New Trip
        </Header>
        <LocationSearchBar autoFillHandler={this.autoFillAddressForm} />
         <Divider horizontal></Divider>
         <Form onSubmit={(ev)=>this.handleTripSubmit(ev)}>
          <Form.Field>
            <Input label="Street Number" id="street_number" type="text" placeholder="Street Number"></Input>
          </Form.Field>
          <Form.Field>
            <Input label="Street Name" id="route" type="text" placeholder="Street Name"></Input>
          </Form.Field>
          <Form.Field>
            <Input label="City" id="locality" type="text" placeholder="City"></Input>
          </Form.Field>
          <Form.Field>
            <Input label="State" id="administrative_area_level_1" type="text" placeholder="State"></Input>
          </Form.Field>
          <Form.Field>
            <Input label="Country" id="country" type="text" placeholder="Country"></Input>
          </Form.Field>
          <Form.Field>
            <Input label="Postal Code" type="text"placeholder='Postal Code' id="postal_code" />
          </Form.Field>
          <Form.Field>
            <Input label="Travel Timeframe (est.)" type="month"placeholder='' />
          </Form.Field>
          <Form.Field>
            <Dropdown text="Select Trip Category" fluid selection options={tripCategoryOptions}/>
          </Form.Field>
          <Button type='submit'>Add Trip</Button>
        </Form>
        <Divider horizontal></Divider>
        {this.setLocationOnChange()}

      </Container>
     )
   }
 }

 export default NewTripForm;


// TO DO:
//5. Setup a placeholder of Today's date


// 2. Add required fields where needed
