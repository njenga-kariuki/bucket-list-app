import React, {Component,Fragment} from 'react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'

class MostPopularMonth extends Component {
  render() {
    return (
      <Container>
        <Script url="https://widgets.skyscanner.net/widget-server/js/loader.js"/>
          <div
            data-skyscanner-widget="InsiderTipsWidget"
            data-tip-type="month_popularity"
            data-origin-name="'Seattle'"
            data-destination-name={this.props.destination}
            data-button-colour="white">
          </div>
      </Container>
    )
  }
}

export default MostPopularMonth;
