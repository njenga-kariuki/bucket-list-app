import React, {Component, Fragment} from 'react';
import {Container, Header, Button, Label, List } from 'semantic-ui-react'
import {Form, Input, Select} from 'formsy-semantic-ui-react';

class CreateAccountForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password:'',
    hotelPref1: '',
    airlinePref1:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.handleCreateAccount(this.state)
  }

  render() {

    const {firstName, lastName, username, email, password} = this.state
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

    return (
      <Fragment>
        <Container>
        <Form onSubmit={(ev)=>this.handleSubmit(ev)}>
          <List>
            <List.Item>
            <Input label ='First name' placeholder='First name' name='firstName' value={firstName} autoComplete='on' validations='isWords' validationErrors={{isWords:'No number or special characters allowed.', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label='Last name' placeholder='Last name' name='lastName' value={lastName} autoComplete='on' validations='isWords' validationErrors={{isWords:'No number or special characters allowed.', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input float='left' label= 'Email   ' placeholder='Email' name='email' value={email} autoComplete='on' validations='isEmail'
              validationErrors={{isEmail:'Invalid email', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label= 'Username' placeholder={`Suggested: ${firstName}_${lastName}`} name='username' value={username} autoComplete='on' validations='minLength:4' validationErrors={{minLength:'Minimum of 4 characters', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Input label='Password' placeholder='Password' type='password' name='password' value={password} autoComplete='on' validations='minLength:4' validationErrors={{minLength:'Minimum of 4 characters', isDefaultRequiredValue: 'Field is required.'}} errorLabel={ <Label color="red" pointing/> } onChange={(e)=>this.handleChange(e)} />
            </List.Item>

            <Header as='h5'>Select options below to specify preferences for hotels and airlines:</Header>
            <List.Item>
            <Label>Hotel</Label>
            <Select label='Hotel preference' placeholder='Select by loyalty program' name='hotelPref1' options={hotelPrefOptions} onChange={(e)=>this.handleChange(e)} />
            </List.Item>
            <List.Item>
            <Label>Airline</Label>
            <Select label='Airline preference' placeholder='Select airline' name='airlinePref1' options={airlinePrefOptions} onChange={(e)=>this.handleChange(e)} />
            </List.Item>
          <Button
            type='submit'
            secondary
            size='small'
            disabled={
              !firstName || !lastName || !username || !email
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
