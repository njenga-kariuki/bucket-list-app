import React, {Component} from 'react';
import CreateAccountForm from '../components/CreateAccountForm';
import LoginForm  from '../components/LoginForm';
import {Container, Button, Divider, Grid, Segment } from 'semantic-ui-react'
import { animateScroll as scroll } from 'react-scroll'


class AuthorizationContainer extends Component {
  state = {
    clickedForm: ''
  }

  //handle click within segment
  handleClick  = (e) => (e.target.name=== 'sign-up' && this.setState({clickedForm:'sign-up'}))

  //show account creation form on login
  showForm = () => {
    if (this.state.clickedForm === 'sign-up'){
      this.scrollToBottom()
      return <CreateAccountForm id="test" handleCreateAccount={this.props.handleCreateAccount}/>
    } else {
      return
    }
  }

  //moves user to form in lower half of page after clicking sign up
  scrollToBottom = () => scroll.scrollToBottom()

  render() {
    return (
      <div>
        <Segment inverted color='teal'>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <LoginForm handleUserLogin={this.props.handleUserLogin}/>
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
