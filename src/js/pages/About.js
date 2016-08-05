import React from 'react';

import Subheading from '../components/Subheading';
import FeaturesLeftImg from '../components/FeaturesLeftImg';
import TeamMembers from '../components/TeamMembers';
import Customer from '../components/Customer';
import Footer from '../components/Footer';
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
          <Subheading title="About"/>
          <FeaturesLeftImg/>
          <TeamMembers/>
          <Customer/>
        </div>
      );
  }
}
 