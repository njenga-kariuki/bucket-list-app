import React, {Component,Fragment} from 'react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'

class WeeksInAdvance extends Component {
  render() {
    return (
      <>
        <Script url="https://widgets.skyscanner.net/widget-server/js/loader.js" onLoad={()=>this.props.changeCardDisplay()}/>
          <div
            data-skyscanner-widget="InsiderTipsWidget"
            data-tip-type="leadtime"
            data-origin-name="'Seattle'"
            data-destination-name={this.props.destination}
            data-button-colour="white">
          </div>
      </>
    )
  }
}

export default WeeksInAdvance;
