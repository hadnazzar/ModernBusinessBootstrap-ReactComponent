import React from 'react';

import {Link} from "react-router";
import Subheading from '../components/Subheading';

import Portfolio2col from '../components/Portfolio/Portfolio2col';

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
        <Subheading title="Portfolio2col"/>
          <Portfolio2col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectName1="Project ONE!"
          projectName2="Project TWO!"
          />
         <Portfolio2col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectName1="Project BLA!"
          projectName2="Project DOM!"
          />
        </div>
      );
  }
}
 