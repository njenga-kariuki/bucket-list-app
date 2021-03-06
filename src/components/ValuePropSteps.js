import React, {Component, Fragment} from 'react';
import {Icon, Step} from 'semantic-ui-react'



class ValuePropSteps extends Component {

  render() {
    return (
      <Fragment>
        <Step.Group fluid vertical size='big'>
          <Step>
            <Icon name='user outline' />
            <Step.Content>
              <Step.Title id='vp-title'>Personalize</Step.Title>
              <Step.Description>Define your travel preferences (e.g. preferred hotels, airlines, activities).</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            <Icon name='plane' />
            <Step.Content id='vp-2'>
              <Step.Title id='vp-title'>Add Trips</Step.Title>
              <Step.Description>Add destinations you want to visit.</Step.Description>
            </Step.Content>
          </Step>

          <Step >
            <Icon name='search' />
            <Step.Content id='vp-3'>
              <Step.Title id='vp-title'>One-Stop Planning</Step.Title>
              <Step.Description>We find the latest information to help you plan a perfect trip.</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </Fragment>
    );
  }
}

//html button if needed //
// <button type="button" className="onClick-button">Get Started</button>


export default ValuePropSteps;

// <Header as='h2'>Travel research made easy.</Header>
// <Header as='h3'>1. Add any destination you want to visit. 2. We get all the information you need to pick the best time to go, place to stay, and sites to see. In one spot. Customized for your preferences. 3. Update details fo each trip  </Header>
