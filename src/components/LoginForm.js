import React, {Component,Fragment} from 'react';
import { Form, Button} from 'semantic-ui-react'
// import {Link} from 'react-router-dom'

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
  //execute handle login to post to server and redirect
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleUserLogin(this.state)
  }

  render() {
    const {username, password} = this.state
    return (
      <Fragment>
      <Form inverted onSubmit={(e)=>this.handleSubmit(e)} >
        <Form.Field inline>
          <Form.Input label='Username' name='username' icon='user' iconPosition='left' value={username} autoComplete='on' onChange={(e)=>this.handleChange(e)} />
        </Form.Field>
        <Form.Field inline>

          <Form.Input label="Password" type='password' name='password' icon='lock' iconPosition='left' autoComplete='on' value={password} onChange={(e)=>this.handleChange(e)} />
        </Form.Field>
        <Button
          type='submit'
          secondary
          size='small'
          disabled={
            !username || !password
          }>Sign in</Button>
      </Form>
    </Fragment>
    );
  }
}

export default LoginForm;
