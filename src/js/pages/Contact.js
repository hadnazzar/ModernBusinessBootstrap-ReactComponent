import React from 'react';

import Subheading from '../components/Subheading';
import MapInfo from '../components/Contact/MapInfo';
import SendMessage from '../components/Contact/SendMessage';
export  default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title:"Welcome to Momoware!",
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  navigate() {
    console.log(this.props);
  }

  render() {
      return(
        <div>
          <Subheading title="Contact"/>
          <MapInfo/>
          <SendMessage/>
        </div>
      );
  }
}
 