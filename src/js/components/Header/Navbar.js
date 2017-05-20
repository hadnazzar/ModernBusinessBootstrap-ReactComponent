import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Title extends React.Component {


    //   toggleCollapse() {
    //     const collapsed = !this.state.collapsed;
    //     this.setState({collapsed});
    //   }

    render() {
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">{this.props.title}</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link to="/" class="navbar-brand"  >Start Bootstrap</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">

                            <li>
                                <IndexLink to="/"  >Home</IndexLink>
                            </li>
                            <li  >
                                <Link to="about"  >About</Link>
                            </li>
                            <li  >
                                <Link to="services"  >Services</Link>
                            </li>
                            <li  >
                                <Link to="contact"  >Contact</Link>
                            </li>

                            <li>
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio <b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <IndexLink to="portfolio1"  >1 Column Portfolio</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="portfolio2"  >2 Column Portfolio</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="portfolio3"  >3 Column Portfolio</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="portfolio4"  >4 Column Portfolio</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="portfolioSingle"  >Single Column Portfolio</IndexLink>
                                    </li>
                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other Pages <b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <IndexLink to="fullWidthPage"  >Full Width Page</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="sidebarPage"  >Sidebar Page</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="faq"  >FAQ</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="Error"  >404</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink to="pricingTable"  >Pricing Table</IndexLink>
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
//             <IndexLink to="blog1"  >Blog Home 1</IndexLink>
//          </li>
//          <li>
//             <IndexLink to="blog2"  >Blog Home 2</IndexLink>
//          </li>
//          <li>
//             <IndexLink to="blogSingle"  >Blog Post</IndexLink>
//          </li>
//      </ul>
//  </li>
