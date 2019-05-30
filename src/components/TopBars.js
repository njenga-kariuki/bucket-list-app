import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class TopBars extends Component {

  renderEachLink=()=>{
    if (this.props.data["Bars"]){
      return this.props.data["Bars"].slice(0,5).map((link, index)=>{
        return(
          <Item key={index}>
            <Item.Content verticalAlign='middle' href={link} target='_blank'>
              Link
            </Item.Content>
          </Item>
        )
      })
    }
    else {
      return
    }
  }

  render() {
    return (
      <Fragment>
      <Header as="h5">Top Bars</Header>
      <Item.Group divided>
      {this.renderEachLink()}
      </Item.Group>
    </Fragment>
    );
  }
}

export default TopBars;
