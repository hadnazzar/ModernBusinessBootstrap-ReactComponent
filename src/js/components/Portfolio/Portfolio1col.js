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
            <div class="col-md-7">
            <IndexLink to="PortfolioItem" onClick={this.toggleCollapse.bind(this)}> 
                <img class="img-responsive img-hover" src={this.props.projectImgPic} alt=""/>
            </IndexLink>
            </div>
            <div class="col-md-5">
                <h3>{this.props.projectName}</h3>
                <h4>Subheading</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                <IndexLink to="PortfolioItem" class="btn btn-primary" onClick={this.toggleCollapse.bind(this)}> <i>View Project</i> </IndexLink>
            </div>
        </div>
         <hr/>
       </div>
      );
  }
}