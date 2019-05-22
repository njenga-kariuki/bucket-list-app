import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  state = {
    activeItem: ''
  }

  handleItemClick = (e) => {
    if (e.target.id === 'signOut'){
      this.props.handleSignOut()
    }
  }

  render() {
    const {activeItem} = this.state
    const welcomeMessage = `Welcome, ${localStorage.getItem('userFirstName')}!`
    return (
      <Menu inverted>
        <Menu.Item name={welcomeMessage}/>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Profile'
          id='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Sign out'
          id='signOut'
          active={activeItem === 'signOut'}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
      </Menu>
    )
  }
}
export default NavBar;
