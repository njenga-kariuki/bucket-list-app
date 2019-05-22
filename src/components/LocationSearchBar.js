// Reference Link: https://medium.com/@hamza.qaisrani.hq/using-the-google-maps-places-autocomplete-javascript-api-in-a-react-project-5742bab4abc9

import React, { Component } from 'react';
import {Form, Input} from 'semantic-ui-react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'

class LocationSearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      query: '',
      address: ''
    }
  }

  handleScriptLoad=()=>{
    //parameter for place type in Google search API
    // let options = { types: ['address']};

    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    this.autocomplete.setFields(['address_component','geometry']);
    this.autocomplete.addListener('place_changed',this.handlePlaceSelect);
    }

    handlePlaceSelect=()=>{
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    let latitude = this.autocomplete.getPlace().geometry.location.lat()
    let longitude = this.autocomplete.getPlace().geometry.location.lng()

    if (address) {
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
          address: addressObject.address_components
        })
      }
      addressObject["coordinates"]= {lat: latitude, long: longitude }
      console.log(addressObject);
      this.props.autoFillHandler(addressObject);
  }

  render() {
    const API_KEY =`${process.env.REACT_APP_API_KEY_GM}`
    const URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`

    return (
      <Container>
        <Script url={URL} onLoad={this.handleScriptLoad}/>
        <Form>
          <Input id="autocomplete" placeholder="Enter trip destination" hinttext="Search City"
            style={{margin: '0 auto',maxWidth: 5500}}>
          </Input>
        </Form>
      </Container>
    );
  }
}

export default LocationSearchBar;
