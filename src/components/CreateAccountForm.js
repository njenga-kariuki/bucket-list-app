import React, {Component, Fragment} from 'react';
import {Container, Header, Button, Label, List,Divider,Dropdown} from 'semantic-ui-react'
import {Form, Input} from 'formsy-semantic-ui-react';

class CreateAccountForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    username: '',
    password:'',
    hotelPref1: '',
    airlinePref1:'',
    defaultDepartureCity:'',
    defaultAirportCode: '',
    activities: [],
    accomodations: []
  }

  //enable controlled form for user inputs
  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  //duplicative state handler for dropdown change -- temporary for semantic UI workaround (work on refactoring)
  handleActivityDropDownChange = (e, { value }) => this.setState({ activities: value })
  handleAccomodationDropDownChange = (e, { value }) => this.setState({ accomodations: value })
  handleHotelDropDownChange = (e, { value }) => this.setState({ hotelPref1: value })
  handleAirlineDropDownChange = (e, { value }) => this.setState({ airlinePref1: value })

  //handle form submit
  handleSubmit = (e) => this.props.handleCreateAccount(this.state)

  render() {
    const {firstName, lastName, username, password, defaultDepartureCity, defaultAirportCode, activities, accomodations, hotelPref1, airlinePref1} = this.state
    const airlinePrefOptions = [
      {
        key: 'Delta',
        text: 'Delta',
        value: 'Delta'
      },
      {
        key: 'United',
        text: 'United',
        value: 'United'
      },
      {
        key: 'Alaska',
        text: 'Alaska',
        value: 'Alaska'
      },
      {
        key: 'American',
        text: 'American',
        value: 'American'
      }
    ]
    const hotelPrefOptions = [
      {
        key: 'SPG',
        text: 'SPG',
        value: 'SPG'
      },
      {
        key: 'IHG',
        text: 'IHG',
        value: 'IHG'
      },
      {
        key: 'Hyatt',
        text: 'Hyatt',
        value: 'Hyatt'
      }
    ]
    const activityOptions = [
      {
        key: 'Restaurants',
        text: 'Restaurants',
        value: 'Restaurants'
      },
      {
        key: 'Bars',
        text: 'Bars',
        value: 'Bars'
      },
      {
        key: 'Hikes',
        text: 'Hikes',
        value: 'Hikes'
      },
      {
        key: 'Golf Courses',
        text: 'Golf Courses',
        value: 'Golf Courses'
      },
      {
        key: 'Tourist Sites',
        text: 'Tourist Sites',
        value: 'Tourist Sites'
      }
    ]

    const accomodationOptions = [
      {
        key: 'Cheapest',
        text: 'Cheapest',
        value: 'Cheapest'
      },
      {
        key: 'Top-Rated',
        text: 'Top-Rated',
        value: 'Top-Rated'
      },
      {
        key: 'Family-Friendly',
        text: 'Family-Friendly',
        value: 'Family-Friendly'
      },
      {
        key: 'Best Location',
        text: 'Best Location',
        value: 'Best Location'
      }
    ]

    return (
      <Fragment>
        <Container id="test">
        <Form onSubmit={(ev)=>this.handleSubmit(ev)}>
          <List>
            <List.Item>
            <Input label ='First name' name='firstName' value={firstName} autoComplete='on' validations='isWords' validationErrors={{isWords:'No number or special characters allowed.', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label='Last name' name='lastName' value={lastName} autoComplete='on' validations='isWords' validationErrors={{isWords:'No number or special characters allowed.', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label= 'Username' placeholder={`Suggested: ${firstName}_${lastName}`} name='username' value={username} autoComplete='on' validations='minLength:4' validationErrors={{minLength:'Minimum of 4 characters', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label='Password'  type='password' name='password' value={password} autoComplete='on' validations='minLength:4' validationErrors={{minLength:'Minimum of 4 characters', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <Divider hidden />
            <List.Item>
            <Input label= 'Default Departure City' placeholder="Seattle" name='defaultDepartureCity' value={defaultDepartureCity} autoComplete='on' validationErrors={{isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label= 'Default Airport Code' placeholder="SEA" name='defaultAirportCode' value={defaultAirportCode} autoComplete='on' validationErrors={{isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>

            <Header as='h5'content="Optional: specify travel preferences" subheader="(We filter results to match your preferences)"></Header>
            <Label>Airline Loyalty</Label>
            <List.Item>
              <Dropdown
                name="airlinePref1"
                placeholder= "Select Airline"
                floating
                labeled
                selection
                options={airlinePrefOptions}
                onChange={this.handleAirlineDropDownChange}
                value={airlinePref1}
              />
            </List.Item>
            <Label>Hotel Loyalty</Label>
            <List.Item>
              <Dropdown
                name="hotelPref1"
                placeholder= "Select loyalty program"
                floating
                labeled
                selection
                options={hotelPrefOptions}
                onChange={this.handleHotelDropDownChange}
                value={hotelPref1}
              />
            </List.Item>
            <Label>Travel activities</Label>
            <List.Item>
              <Dropdown
                name="activities"
                text= "Select all that apply"
                floating
                labeled
                multiple selection
                options={activityOptions}
                onChange={this.handleActivityDropDownChange}
                value={activities}
              />
            </List.Item>
            <Label>Accomdation Preferences</Label>
            <List.Item>
              <Dropdown
                name="accomodations"
                text= "Select all that apply"
                floating
                labeled
                multiple selection
                options={accomodationOptions}
                onChange={this.handleAccomodationDropDownChange}
                value={accomodations}
              />
            </List.Item>
            <Divider hidden />
            <Button
              type='submit'
              size='small'
              disabled={
                !firstName || !lastName || !username || !password
              }>Create account
            </Button>
        </List>
        </Form>
        </Container>
      </Fragment>
    )
  }
}
export default CreateAccountForm;
