import React, {Component} from 'react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'


class TypicalFlightPriceGraph extends Component {

  render() {
    const latitude = `${this.props.latitude}`
    const longitude = `${this.props.longitude}`
    let url ="https://widgets.skyscanner.net/widget-server/js/loader.js"
    url += '?q=' + Math.random()

    return (
      <Container id="find-me">
        <Script url={url}/>
          <div
            data-skyscanner-widget="InsiderTipsWidget"
            data-tip-type="indicative_price"
            data-origin-name="'Seattle'"
            data-destination-name={this.props.destination}
            data-destination-coords={`${longitude},${latitude},`}
            data-currency="USD"
            data-button-colour="white">
          </div>
      </Container>
    )
  }
}

export default TypicalFlightPriceGraph;
