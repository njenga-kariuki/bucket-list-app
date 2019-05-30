import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopTouristSites extends Component {

  renderEachLink=()=>{
    if (this.props.data["Tourist Sites"]){
      return this.props.data["Tourist Sites"].map((linkObj, index)=>{
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
      <Header as="h5">Top Tourist Sites</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>

    </Fragment>
    );
  }
}

export default TopTouristSites;
