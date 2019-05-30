import React, {Component} from 'react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'

class WeeksInAdvance extends Component {
  render() {
    let url ="https://widgets.skyscanner.net/widget-server/js/loader.js"
    url += '?q=' + Math.random()
    return (
      <Container id="find-me">
        <Script url={url}/>
          <div
            data-skyscanner-widget="InsiderTipsWidget"
            data-tip-type="leadtime"
            data-origin-name="'Seattle'"
            data-destination-name={this.props.destination}
            data-button-colour="white">
          </div>
      </Container>
    )
  }
}

export default WeeksInAdvance;
