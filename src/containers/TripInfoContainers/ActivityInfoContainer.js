import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'
import TopHikes from '../../components/TopHikes';
import TopRestaurants from '../../components/TopRestaurants';
import TopGolfCourses from '../../components/TopGolfCourses'
import TopTouristSites from '../../components/TopTouristSites';
import TopBars from '../../components/TopBars';

class ActivityInfoContainer extends Component {
  render() {
    return (
      <Card.Group>
        {this.props.data["Restaurants"] &&
          <Card>
            <Card.Content>
              <TopRestaurants data={this.props.data} />
            </Card.Content>
          </Card>
        }
        {this.props.data["Hikes"] &&
          <Card>
            <Card.Content>
              <TopHikes data={this.props.data} />
            </Card.Content>
          </Card>
        }
        {this.props.data["Golf Courses"] &&
          <Card>
            <Card.Content>
              <TopGolfCourses data={this.props.data} />
            </Card.Content>
          </Card>
        }
        {this.props.data["Tourist Sites"] &&
          <Card>
            <Card.Content>
              <TopTouristSites data={this.props.data} />
            </Card.Content>
          </Card>
        }
        {this.props.data["Bars"] &&
          <Card>
            <Card.Content>
              <TopBars data={this.props.data} />
            </Card.Content>
          </Card>
        }
      </Card.Group>
    )
  }
}

export default ActivityInfoContainer;
