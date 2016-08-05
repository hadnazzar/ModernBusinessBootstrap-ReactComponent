import React from 'react';

export default class AccordionPanel extends React.Component {
  render() {
      return(
       <div class="container">
       <div class="row">
       <div class="col-lg-12">
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href={this.props.hrefNumber}>{this.props.header}</a>
                            </h4>
                        </div>
                        <div id={this.props.hrefId} class="panel-collapse collapse">
                            <div class="panel-body">
                               {this.props.content}
                            </div>
                        </div>
                    </div>
             </div>
       </div>
    </div>
    </div>
      );
  }
}
