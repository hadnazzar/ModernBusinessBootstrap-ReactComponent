import React from 'react';

import {Link} from "react-router";
import Subheading from '../components/Subheading';

import Portfolio4col from '../components/Portfolio/Portfolio4col';

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
        <Subheading title="Portfolio4col"/>
          <Portfolio4col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectImgPic3="http://placehold.it/700x300"
          projectImgPic4="http://placehold.it/700x300"
          />
         <Portfolio4col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectImgPic3="http://placehold.it/700x300"
          projectImgPic4="http://placehold.it/700x300"
          />
           <Portfolio4col 
          projectImgPic1="http://placehold.it/700x300"
          projectImgPic2="http://placehold.it/700x300"
          projectImgPic3="http://placehold.it/700x300"
          projectImgPic4="http://placehold.it/700x300"
          />
        </div>
      );
  }
}
 