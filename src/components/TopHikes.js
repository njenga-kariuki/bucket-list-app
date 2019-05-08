import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopHikes extends Component {

  renderEachLink=()=>{
    if (this.props.data){
      return this.props.data.hikes.slice(0,5).map((link,index)=>{
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
      <Header as="h5">Top Hikes</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>

      </>
    );
  }
}

export default TopHikes;