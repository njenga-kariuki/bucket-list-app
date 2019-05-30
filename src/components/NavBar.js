import React, {Component,Fragment} from 'react';
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
    const userFirstName = localStorage.getItem('userFirstName')
    const {activeItem} = this.state
    const welcomeMessage = `Welcome, ${userFirstName}!`

    return (
      <Fragment>
      {userFirstName &&
        <Menu inverted color='teal'>
          <Menu.Item name={welcomeMessage}/>
        <Menu.Menu position='right'>
          <Menu.Item
            name='Sign out'
            id='signOut'
            active={activeItem === 'signOut'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        </Menu>
      }
    </Fragment>
    )
  }
}
export default NavBar;
