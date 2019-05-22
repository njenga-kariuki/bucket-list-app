import React, {Component, Fragment} from 'react';
import {Menu} from 'semantic-ui-react'

class TripDetailMenu extends Component {

  render() {
    return (
      <Fragment>
        <Menu pointing secondary>
           <Menu.Item
             icon='plane'
             name='Flights'
             active={this.props.activeItem === 'Flights'} onClick={this.props.handleItemClick} />
           <Menu.Item
             icon='home'
             name='Lodging'
             active={this.props.activeItem === 'Lodging'}
             onClick={this.props.handleItemClick}
           />
           <Menu.Item
             icon='child'
             name='Activities'
             active={this.props.activeItem === 'Activities'}
             onClick={this.props.handleItemClick}
           />
           <Menu.Item
             icon='map marker alternate'
             name='Map'
             active={this.props.activeItem === 'Map'}
             onClick={this.props.handleItemClick}
           />
         </Menu>
      </Fragment>
    )
  }
}

export default TripDetailMenu;
