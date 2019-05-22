import React, {Component, Fragment} from 'react';
import {Card,Item} from 'semantic-ui-react'
import TopHikes from '../../components/TopHikes';
import TopRestaurants from '../../components/TopRestaurants';
import TopGolfCourses from '../../components/TopGolfCourses'
import TopTouristSites from '../../components/TopTouristSites';

class ActivityInfoContainer extends Component {
  render() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <TopRestaurants data={this.props.data} />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <TopHikes data={this.props.data} />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <TopGolfCourses data={this.props.data} />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <TopTouristSites data={this.props.data} />
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default ActivityInfoContainer;
