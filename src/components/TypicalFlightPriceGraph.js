import React, {Component} from 'react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'


class TypicalFlightPriceGraph extends Component {

  render() {
    return (
      <Container>
        <Script url="https://widgets.skyscanner.net/widget-server/js/loader.js"/>
          <div
            data-skyscanner-widget="InsiderTipsWidget"
            data-tip-type="indicative_price"
            data-origin-name="'Seattle'"
            data-destination-name={this.props.destination}
            data-currency="USD"
            data-button-colour="white">
          </div>
      </Container>
    )
  }
}

export default TypicalFlightPriceGraph;
