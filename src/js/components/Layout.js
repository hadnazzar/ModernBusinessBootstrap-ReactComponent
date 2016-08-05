import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

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

  render() {
      const { location } = this.props;
      return(
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
            {this.props.children}
          <Body/>
          <Footer/>
        </div>
      );
  }
}
 