import React, {Component} from 'react';
import CreateAccountForm from '../components/CreateAccountForm';
import LoginForm  from '../components/LoginForm';
import {Input, Container, Header, Select, Button, Label, Item, List, Divider, Grid, Segment } from 'semantic-ui-react'
import Form from 'formsy-react'


class AuthorizationContainer extends Component {

  state = {
    clickedForm: ''
  }



  handleClick  = (ev) => {
    if (ev.target.name === 'login'){
      this.setState({clickedForm:'login'})
    } else if (ev.target.name=== 'sign-up'){
      this.setState({clickedForm:'sign-up'})
    } else {
      return
    }
  }

  showForm = () => {
    if (this.state.clickedForm === 'login'){
      return <LoginForm handleUserLogin={this.props.handleUserLogin}/>
    } else if (this.state.clickedForm === 'sign-up'){
      return <CreateAccountForm/>
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <Segment inverted>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Button content='Login' icon='sign-in' size='big' name='login' onClick={(ev)=>this.handleClick(ev)} />
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Button content='Sign up' icon='signup' size='big' name='sign-up' onClick={(ev)=>this.handleClick(ev)} />
            </Grid.Column>
          </Grid>
          <Divider vertical inverted>Or</Divider>
      </Segment>
      <Container>{this.showForm()}</Container>
      </div>
    )
  }
}
export default AuthorizationContainer;
