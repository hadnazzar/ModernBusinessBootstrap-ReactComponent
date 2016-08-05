import React from 'react';

import {Link} from "react-router";
import Subheading from '../components/Subheading';

import PortfolioSingle from '../components/Portfolio/PortfolioSingle';

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
        <Subheading title="PortfolioSingle"/>
          <PortfolioSingle 
          projectImgPic1="http://placehold.it/750x450"
          projectImgPic2="http://placehold.it/750x450"
          projectImgPic3="http://placehold.it/750x450"
          projectName1="Project ONE!"
          />
        </div>
      );
  }
}
 