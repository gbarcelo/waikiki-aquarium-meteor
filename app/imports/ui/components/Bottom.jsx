import React from 'react';
import {
  Container,
  Menu,
  Icon,
  Dropdown,
} from 'semantic-ui-react';

class Bottom extends React.Component {
  render() {
    return (
        <div className='bottomback'>
          <Grid columns={4} stackable centered className='bottomgrid'>
            <Grid.Column>
              <Segment.Group size='large' horizontal>
                <Segment>
                  <Image src='https://www.waikikiaquarium.org/wp-content/uploads/2013/10/icon_visit.png'
                         className='bottomicon'/>
                </Segment>
                <Segment>
                  <Header inverted size='large'>Plan Your Visit</Header>
                  <p>Hours: 9:00 a.m. - 4:30 p.m. daily <br/>
                    (Facility closes at 5:00 p.m.)</p>
                  <p><a href='#'>Learn More >></a></p>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group size='large' horizontal>
                <Segment>
                  <Image src='https://www.waikikiaquarium.org/wp-content/uploads/2013/10/icon_admission.png'
                         className='bottomicon'/>
                </Segment>
                <Segment>
                  <Header inverted size='large'>Buy Tickets Online</Header>
                  <p>General Admission: $12</p><br/>
                  <p><a href='#'>Buy Now >></a></p>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group size='large' horizontal>
                <Segment>
                  <Image src='https://www.waikikiaquarium.org/wp-content/uploads/2013/10/Membership-button-.png'
                         className='bottomicon'/>
                </Segment>
                <Segment>
                  <Header inverted size='large'>Become A Member</Header>
                  <p>Enjoy these great benefits as a member of the Waikīkī Aquarium. </p>
                  <p><a href='#'>Become a Member >></a></p>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}