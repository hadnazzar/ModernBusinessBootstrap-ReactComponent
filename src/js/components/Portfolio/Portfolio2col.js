import React from 'react';

import {IndexLink , Link } from "react-router";

export default class Portfolio2col extends React.Component {


  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }


  render() {
      return(
          <div class="container">
       <div class="row">
            <div class="col-md-6 img-portfolio">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                <img class="img-responsive img-hover" src={this.props.projectImgPic1} alt=""/>
            </IndexLink>
                <h3>
                 <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> {this.props.projectName1} </IndexLink>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
            <div class="col-md-6 img-portfolio">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                <img class="img-responsive img-hover" src={this.props.projectImgPic2} alt=""/>
            </IndexLink>
                <h3>
                  <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}>  {this.props.projectName2}   </IndexLink>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
        </div>
     </div>
      );
  }
}