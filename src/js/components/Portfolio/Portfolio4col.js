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
            <div class="col-md-3 img-portfolio">
                 <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPic1} alt=""/>
                 </IndexLink>
            </div>
            <div class="col-md-3 img-portfolio">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPic2} alt=""/>
                 </IndexLink>
            </div>
            <div class="col-md-3 img-portfolio">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPic3} alt=""/>
                 </IndexLink>
            </div>
            <div class="col-md-3 img-portfolio">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPic4} alt=""/>
                 </IndexLink>
            </div>
        </div>
     </div>
      );
  }
}