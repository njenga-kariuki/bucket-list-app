import React, {Component,Fragment} from 'react';
import {Table, Header} from 'semantic-ui-react'
import AvgMonthlyTempRow from './AvgMonthlyTempRow';

class AvgMonthlyTempTable extends Component {

  //helper function to iterate through each temp and render it

  createTemperatureRow=()=>{
    let months = ['Jan', 'Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec']
    let tempArr = this.props.temps.split(",").slice(1,13)
  
    return tempArr.map((temp,index)=>{
      return <AvgMonthlyTempRow key={index} temp={temp} month={months[index]}/>
    })
  }

  render() {
    return (
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Month</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.createTemperatureRow()}
        </Table.Body>
      </Table>
    )
  }
}

export default AvgMonthlyTempTable;
