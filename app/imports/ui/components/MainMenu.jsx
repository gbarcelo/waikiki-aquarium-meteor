import React from 'react';
import {
  Container,
  Menu,
  Icon,
  Dropdown,
} from 'semantic-ui-react';

export default class MainMenu extends React.Component {
  render() {
    const dropStyle = { background: '#161141', marginTop: '1px' };
    return (
        <Grid centered className='menugrid'>
          <Image src='https://www.waikikiaquarium.org/wp-content/uploads/2015/09/waqlogo_196_127_white.png'
                 className='logo'/>
          <Menu borderless className='mainmenu'>
            <Dropdown icon={null} item simple text='Visit >>'>
              <Dropdown.Menu style={dropStyle}>
                <Dropdown.Item text='Buy Tickets'/>
                <Dropdown.Item text='Hours'/>
                <Dropdown.Item text='Directions & Parking'/>
                <Dropdown.Item text='Gift Shop'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown icon={null} item simple text='Experience >>'>
              <Dropdown.Menu style={dropStyle}>
                <Dropdown.Item text='Exhibits'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown icon={null} item simple text='Events & Programs >>'>
              <Dropdown.Menu style={dropStyle}>
                <Dropdown.Item text='Annual Events'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown icon={null} item simple text='Conservation >>'>
              <Dropdown.Menu style={dropStyle}>
                <Dropdown.Item text='Projects'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown icon={null} item simple text='About >>'>
              <Dropdown.Menu style={dropStyle}>
                <Dropdown.Item text='History'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown icon={null} item simple text='Support >>'>
              <Dropdown.Menu style={dropStyle}>
                <Dropdown.Item text='Membership'/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid>
    );
  }
}