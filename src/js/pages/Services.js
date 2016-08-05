import React from 'react';

import Subheading from '../components/Subheading';
import ImageFull from '../components/ImageFull';
import ServicePanels from '../components/Services/ServicePanels';
import ServiceList from '../components/Services/ServiceList';
import ServiceTabs from '../components/Services/ServiceTabs';

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
          <Subheading title="Services"/>
          <ImageFull imgLink="http://placehold.it/1200x300"/>
          <ServicePanels/>
          <ServiceTabs/>
          <ServiceList/>
        </div>
      );
  }
}
 