import React, {Component,Fragment} from 'react';
import { Form, Header, Input, Container , Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleUserLogin(this.state)
  }

  render() {
    return (
      <>
      <Header as='h5'>Login</Header>
      <Form onSubmit={(e)=>this.handleSubmit(e)} >
        <Form.Field inline>
          <label>Username</label>
          <Input placeholder='Username' name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)} />
        </Form.Field>
        <Form.Field inline>
          <label>Password</label>
          <Input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(e)=>this.handleChange(e)} />
        </Form.Field>
        <Button type='submit' secondary size='small'>Sign in</Button>
      </Form>

    </>
    );
  }
}

export default LoginForm;
