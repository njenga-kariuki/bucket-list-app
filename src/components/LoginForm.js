import React, {Component,Fragment} from 'react';
import { Form, Header, Input, Container , Button, Label} from 'semantic-ui-react'
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
      <Form inverted onSubmit={(e)=>this.handleSubmit(e)} >
        <Form.Field inline>
          <Form.Input label='Username' name='username' icon='user' iconPosition='left' value={this.state.username} autoComplete='on' onChange={(e)=>this.handleChange(e)} />
        </Form.Field>
        <Form.Field inline>

          <Form.Input label="Password" type='password' name='password' icon='lock' iconPosition='left' autoComplete='on' value={this.state.password} onChange={(e)=>this.handleChange(e)} />
        </Form.Field>
        <Button type='submit' secondary size='small'>Sign in</Button>
      </Form>

    </>
    );
  }
}

export default LoginForm;
