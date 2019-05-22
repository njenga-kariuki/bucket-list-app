import React, {Component,Fragment} from 'react';
import Script from 'react-load-script';

class WeeksInAdvance extends Component {
  render() {
    return (
      <Fragment>
        <Script url="https://widgets.skyscanner.net/widget-server/js/loader.js" onLoad={()=>this.props.changeCardDisplay()}/>
          <div
            data-skyscanner-widget="InsiderTipsWidget"
            data-tip-type="leadtime"
            data-origin-name="'Seattle'"
            data-destination-name={this.props.destination}
            data-button-colour="white">
          </div>
      </Fragment>
    )
  }
}

export default WeeksInAdvance;
