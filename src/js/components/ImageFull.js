import React from 'react';


export default class Body extends React.Component {
  render() {
      return(
       <div class="container">
       <div class="row">
            <div class="col-lg-12">
                <img class="img-responsive" src={this.props.imgLink} alt=""/>
            </div>
        </div>
       </div>
      );
  }
}
