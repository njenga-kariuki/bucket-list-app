import React, {Component} from 'react';
import {Card, Item} from 'semantic-ui-react'
import AvgMonthlyTempGraph from '../../components/AvgMonthlyTempGraph';

class GeneralInfoContainer extends Component {
  render() {
    return (
      <Card.Group>
        {this.props.temps && 
          <Card>
            <Card.Content>
              <Item.Header id="temp-header" size="tiny">Average Temperature</Item.Header>
              <AvgMonthlyTempGraph temps={this.props.temps}/>
            </Card.Content>
          </Card>
        }
      </Card.Group>
    )
  }
}

export default GeneralInfoContainer;
