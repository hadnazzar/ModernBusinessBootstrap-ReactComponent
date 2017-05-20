import React from 'react';

import Title from './header/Title'
import Navbar from './header/Navbar'
export default class Header extends React.Component {

  handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
  render() {
      return(
       <div class="container">
        <Navbar/>
        {/*<Title title={this.props.title}/>*/}
        {/*<input id="header-input-changer" value={this.props.title} onChange={this.handleChange.bind(this)}/>*/}
       </div>
      );
  }
}
