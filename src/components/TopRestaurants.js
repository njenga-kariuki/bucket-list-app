import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopRestaurants extends Component {

  renderEachLink=()=>{
    if (this.props.data["Restaurants"]){
      return this.props.data["Restaurants"].map((linkObj, index)=>{
        return(
          <Item key={index}>
            <Item.Content verticalAlign='middle' href={Object.values(linkObj)[0]} target='_blank'>
              {Object.keys(linkObj)[0]}
            </Item.Content>
          </Item>
        )
      })
    }
  }

  render() {
    return (
      <Fragment>
      <Header as="h5">Top Restaurants</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>
    </Fragment>
    );
  }
}

export default TopRestaurants;
