import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Carousel from '../components/Carousel';
import ThreeBoxes from '../components/ThreeBoxes';
import PortfolioSixPic from '../components/PortfolioSixPic';
import FeaturesRightImg from '../components/FeaturesRightImg';
import ActionButton from '../components/ActionButton';

import {Link} from "react-router";

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
          <Carousel/>
          <ThreeBoxes/>
          <PortfolioSixPic/>
          <FeaturesRightImg/>
          <ActionButton/>
        </div>
      );
  }
}
 