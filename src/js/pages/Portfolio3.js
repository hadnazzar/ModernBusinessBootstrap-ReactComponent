import React from 'react';

import {Link} from "react-router";
import Subheading from '../components/Subheading';

import Portfolio3col from '../components/Portfolio/Portfolio3col';

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
        <Subheading title="Portfolio3col"/>
          <Portfolio3col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectImgPic3="http://placehold.it/700x300"
          projectName1="Project ONE!"
          projectName2="Project TWO!"
          projectName3="Project Three!"
          />
         <Portfolio3col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectImgPic3="http://placehold.it/700x300"
          projectName1="Project BLA!"
          projectName2="Project DOM!"
           projectName3="Project Momoware!"
          />
        </div>
      );
  }
}
 