import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopTouristSites extends Component {

  renderEachLink=()=>{
    if (this.props.data){
      return this.props.data.tourist_sites.slice(0,5).map((link,index)=>{
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
      <Header as="h5">Top Tourist Sites</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>

      </>
    );
  }
}

export default TopTouristSites;
