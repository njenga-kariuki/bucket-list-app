import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopRestaurants extends Component {

  renderEachLink=()=>{
    if (this.props.data){
      return this.props.data.restaurants.slice(0,5).map((link, index)=>{
        return(
          <Item key={index}>
            <Item.Content verticalAlign='middle' href={link} target='_blank'>
              Link
            </Item.Content>
          </Item>
        )
      })
    }
  }

  render() {
    return (
      <>
      <Header as="h5">Top Restaurants</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>

      </>
    );
  }
}

export default TopRestaurants;
