import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

import {Link} from "react-router";

export  default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      // title:"Welcome to Momoware!",
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
      const { location } = this.props;
      return(
        <div>
          {/*<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>*/}
          <Header/>
            {this.props.children}
          {/*<Body/>*/}
          <Footer/>
        </div>
      );
  }
}
 