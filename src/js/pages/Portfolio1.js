import React from 'react';

import {Link} from "react-router";
import Subheading from '../components/Subheading';

import Portfolio1col from '../components/Portfolio/Portfolio1col';

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
         <Subheading title="Portfolio 1"/>
          <Portfolio1col 
          projectImgPic="http://placehold.it/700x300"
          projectName="Project ONE!"
          />
          <Portfolio1col 
          projectImgPic="http://placehold.it/700x300" 
          projectName="Project TWO!"
          />
        </div>
      );
  }
}
 