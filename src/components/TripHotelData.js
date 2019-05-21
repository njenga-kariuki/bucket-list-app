import React, {Component, Fragment} from 'react';
import {Table, Header, Item} from 'semantic-ui-react'


class TripHotelData extends Component {
  printHotelData=()=>{
    if (this.props.hotelData){
      return Object.keys(this.props.hotelData).map((key)=>{
        let hotelURL =`https://${this.props.hotelData[key][0]}`
        let price = this.props.hotelData[key][1] ? this.props.hotelData[key][1].split('$') : "N/A"
        let finalPrice = price === "N/A" ? price : `$${price[price.length-1]}`

       return(
         <Item key={key}>
           <Item.Content verticalAlign='middle' href={hotelURL} target='_blank'>
            {key}
            <Item.Meta>
                <span>{finalPrice}</span>
          </Item.Meta>
           </Item.Content>
         </Item>
       )
     })
    }
  }

  render() {
    return (
      <>
      <Header as="h5">Top Hotels</Header>
      <Item.Group divided>
        {this.printHotelData()}
      </Item.Group>
      </>
    )
  }
}

export default TripHotelData;
