import React from 'react';
import {
  Image,
} from 'semantic-ui-react';

export default class MainImage extends React.Component {
  render() {
    return (
        <Image fluid src='http://i64.tinypic.com/swe1yo.jpg' className='mainimage'/>
    );
  }
}