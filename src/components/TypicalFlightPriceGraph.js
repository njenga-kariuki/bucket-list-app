import React, {Component} from 'react';
import Script from 'react-load-script';
import {Container} from 'semantic-ui-react'


class TypicalFlightPriceGraph extends Component {

  state = {
    html: ''
  }

  componentDidUpdate = () => {
    // this.forceUpdate()
  }

  componentWillUnmount = () => {
    console.log("I unmounted")
  }

  componentDidMount = () => {
    console.log("I did mount")


  }

  findThing = () => {
    // setInterval(()=>{
    //   let test = document.getElementById('find-me').innerHTML
    //   this.setState({html: test},()=>{console.log(this.state.html)})
    // },5000)

  }

  render() {

    return (
      <Container id="find-me">
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
