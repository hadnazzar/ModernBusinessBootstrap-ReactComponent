import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Title extends React.Component {


  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
      return(
         <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">{this.props.title}</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                   <Link to="/" class="navbar-brand" onClick={this.toggleCollapse.bind(this)}>Start Bootstrap</Link>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">

                        <li activeClassName="active" onlyActiveOnIndex={true}>
                            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                        </li>
                        <li activeClassName="active">
                            <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
                        </li>
                        <li activeClassName="active">
                            <Link to="services" onClick={this.toggleCollapse.bind(this)}>Services</Link>
                        </li>
                         <li activeClassName="active">
                            <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
                        </li>

                       <li activeClassName="active" onlyActiveOnIndex={true}>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>
                                <IndexLink to="portfolio1" onClick={this.toggleCollapse.bind(this)}>1 Column Portfolio</IndexLink>
                                </li>
                                <li>
                                 <IndexLink to="portfolio2" onClick={this.toggleCollapse.bind(this)}>2 Column Portfolio</IndexLink>
                                </li>
                                <li>
                                      <IndexLink to="portfolio3" onClick={this.toggleCollapse.bind(this)}>3 Column Portfolio</IndexLink>
                                </li>
                                <li>
                                      <IndexLink to="portfolio4" onClick={this.toggleCollapse.bind(this)}>4 Column Portfolio</IndexLink>
                                </li>
                                <li>
                                      <IndexLink to="portfolioSingle" onClick={this.toggleCollapse.bind(this)}>Single Column Portfolio</IndexLink>
                                </li>
                            </ul>
                        </li>
                        //Blog Area
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other Pages <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <IndexLink to="fullWidthPage" onClick={this.toggleCollapse.bind(this)}>Full Width Page</IndexLink>
                                </li>
                                <li>
                                    <IndexLink to="sidebarPage" onClick={this.toggleCollapse.bind(this)}>Sidebar Page</IndexLink>
                                </li>
                                <li>
                                    <IndexLink to="faq" onClick={this.toggleCollapse.bind(this)}>FAQ</IndexLink>
                                </li>
                                <li>
                                    <IndexLink to="Error" onClick={this.toggleCollapse.bind(this)}>404</IndexLink>
                                </li>
                                <li>
                                    <IndexLink to="pricingTable" onClick={this.toggleCollapse.bind(this)}>Pricing Table</IndexLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}
// Add for blog
// <li class="dropdown">
//      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <b class="caret"></b></a>
//      <ul class="dropdown-menu">
//          <li>
//             <IndexLink to="blog1" onClick={this.toggleCollapse.bind(this)}>Blog Home 1</IndexLink>
//          </li>
//          <li>
//             <IndexLink to="blog2" onClick={this.toggleCollapse.bind(this)}>Blog Home 2</IndexLink>
//          </li>
//          <li>
//             <IndexLink to="blogSingle" onClick={this.toggleCollapse.bind(this)}>Blog Post</IndexLink>
//          </li>
//      </ul>
//  </li>
