import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopHikes extends Component {

  renderEachLink=()=>{
    if (this.props.data["Hikes"]){
      return this.props.data["Hikes"].map((linkObj, index)=>{
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
      <Header as="h5">Top Hikes</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>
    </Fragment>
    );
  }
}

export default TopHikes;
