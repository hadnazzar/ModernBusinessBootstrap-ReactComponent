import React from 'react';

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

  navigate() {
    console.log(this.props);
  }

  render() {
      return(
        <div>
          <Subheading title="Full width Page"/>

          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                  <p>Most of Start Bootstrap's unstyled templates can be directly integrated into the Modern Business template. You can view all of our unstyled templates on our website at <a href="http://startbootstrap.com/template-categories/unstyled">http://startbootstrap.com/template-categories/unstyled</a>.</p>
              </div>
          </div>
          </div>

        </div>
      );
  }
}
 