import React from 'react';

import {IndexLink , Link } from "react-router";

import Subheading from '../components/Subheading';

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

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
      return(
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="list-group">
                     <Link to="/" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Home</Link>
                     <Link to="About" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>About</Link>
                     <Link to="Services"class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Services</Link>
                     <Link to="Contact" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
                     <Link to="Portfolio1" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>1 Column Portfolio</Link>
                     <Link to="Portfolio2" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>2 Column Portfolio</Link>
                     <Link to="Portfolio3" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>3 Column Portfolio</Link>
                     <Link to="Portfolio4" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>4 Column Portfolio</Link>
                     <Link to="PortfolioSingle" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Single Portfolio Item</Link>
                     <Link to="FullWidthPage" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Full Width Page</Link>
                     <Link to="SidebarPage" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Sidebar Page</Link>
                     <Link to="FAQ" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>FAQ</Link>
                     <Link to="Error" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>404</Link>
                     <Link to="PricingTable" class="list-group-item" onClick={this.toggleCollapse.bind(this)}>Pricing Table</Link>
                    </div>
                </div>
                <div class="col-md-9">
                    <h2>Section Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, et temporibus, facere perferendis veniam beatae non debitis, numquam blanditiis necessitatibus vel mollitia dolorum laudantium, voluptate dolores iure maxime ducimus fugit.</p>
                </div>
            </div>
        </div>
      );
  }
}
 


