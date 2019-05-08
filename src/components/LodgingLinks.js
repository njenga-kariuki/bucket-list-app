import React, {Component,Fragment} from 'react';
import {Item, Header} from 'semantic-ui-react'


class LodgingLinks extends Component {

  //format url for AirBnB lookup
  airBnBFormatLink=()=>{
    let urlDestination = this.props.destination.replace(/\s/g,"-")
    return `https://www.airbnb.com/s/${urlDestination}/all?refinement_paths%5B%5D=%2Ffor_you&checkin=${this.props.tripStart}&checkout=${this.props.tripEnd}&adults=1&children=0&infants=0&guests=1&toddlers=0`
  }

  //format url for homeaway lookup
  homeAwayFormatLink=()=>{
    let urlDestination = this.props.destination.replace(/\s/g,"-")
    return `https://www.homeaway.com/search/keywords:${urlDestination}/arrival:${this.props.tripStart}/departure:${this.props.tripEnd}?petIncluded=false&ssr=true&adultsCount=1`
  }

  hyattFormatLink=()=>{
    let urlDestination = this.props.destination.replace(/\s/g,"%20")
    return `https://www.hyatt.com/search/${urlDestination}?checkinDate=${this.props.tripStart}&checkoutDate=${this.props.tripEnd}&rooms=1&adults=1&kids=0&rate=Standard`
  }

  hotelsDotComFormatLink=()=>{
    let urlDestination = this.props.destination.replace(/\s/g,"%20")

    return `https://www.hotels.com/search.do?q-destination=${urlDestination}&q-check-in=${this.props.tripStart}&q-check-out=${this.props.tripEnd}&q-rooms=1&q-room-0-adults=1&q-room-0-children=0`
  }

  render() {
    return (
      <>
      <Header as="h5">Other Lodging Links</Header>
      <Item.Group divided>
        <Item>
          <Item.Content verticalAlign='middle' href={this.airBnBFormatLink()} target='_blank'>
           AirBnB
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle' href={this.homeAwayFormatLink()} target='_blank'>
           HomeAway
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle' href={this.hyattFormatLink()} target='_blank'>
           Hyatt
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle' href={this.hotelsDotComFormatLink()} target='_blank'>
           Hotels.com
          </Item.Content>
        </Item>
      </Item.Group>
      </>
    )
  }
}

export default LodgingLinks;
