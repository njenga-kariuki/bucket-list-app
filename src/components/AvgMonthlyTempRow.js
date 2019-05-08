import React, {Component,Fragment} from 'react';
import {Table, Header} from 'semantic-ui-react'

class AvgMonthlyTempRow extends Component {

  render() {
    return (
      <Table.Row>
        <Table.Cell>
          <Header>
            <Header.Content>
              <Header.Subheader>{this.props.month}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{this.props.temp}</Table.Cell>
      </Table.Row>
    )
  }
}

export default AvgMonthlyTempRow;
