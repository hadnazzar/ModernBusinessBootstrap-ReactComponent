import React from 'react';
import {IndexLink , Link} from "react-router";

export default class Subheading extends React.Component {


  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
      return(
       <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">{this.props.title}
                    <small> Subheading</small>
                </h1>
                <ol class="breadcrumb">
                    <li><IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                    </li>
                    <li class="active">{this.props.title}</li>
                </ol>
            </div>
        </div>
       </div>
      );
  }
}
