import React from 'react';

import {IndexLink , Link } from "react-router";

import SingleRelatedProjects from './SingleRelatedProjects';


export default class Portfolio2col extends React.Component {


  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }


  render() {
      return(
          <div class="container">
           <div class="row">
            <div class="col-md-8">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img class="img-responsive" src={this.props.projectImgPic1} alt=""/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src={this.props.projectImgPic2} alt=""/>
                        </div>
                        <div class="item">
                            <img class="img-responsive" src={this.props.projectImgPic3} alt=""/>
                        </div>
                    </div>
                    <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <h1>{this.props.projectName1}</h1>
                <h3>Project Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                <h3>Project Details</h3>
                <ul>
                    <li>Lorem Ipsum</li>
                    <li>Dolor Sit Amet</li>
                    <li>Consectetur</li>
                    <li>Adipiscing Elit</li>
                </ul>
            </div>
        </div>
        <SingleRelatedProjects
          projectImgPicRelated1="http://placehold.it/700x300"
          projectImgPicRelated2="http://placehold.it/700x300"
          projectImgPicRelated3="http://placehold.it/700x300"
          projectImgPicRelated4="http://placehold.it/700x300"
        />
     </div>
      );
  }
}

