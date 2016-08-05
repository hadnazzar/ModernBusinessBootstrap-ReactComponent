import React from 'react';

import {IndexLink , Link } from "react-router";

export default class Portfolio1col extends React.Component {


  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }


  render() {
      return(
       <div class="container">
            <div class="row">

            <div class="col-lg-12">
                <h3 class="page-header">Related Projects</h3>
            </div>

            <div class="col-sm-3 col-xs-6">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPicRelated1} alt=""/>
                 </IndexLink>
            </div>

            <div class="col-sm-3 col-xs-6">
                 <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPicRelated2} alt=""/>
                 </IndexLink>
            </div>

            <div class="col-sm-3 col-xs-6">
               <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPicRelated3} alt=""/>
                 </IndexLink>
            </div>

            <div class="col-sm-3 col-xs-6">
                <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                    <img class="img-responsive img-hover" src={this.props.projectImgPicRelated4} alt=""/>
                 </IndexLink>
            </div>

        </div>
       </div>
      );
  }
}