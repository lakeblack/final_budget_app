import React, { Component } from 'react';

class AppContainer extends Component{
  render(){
    return(
      <div>
        <h1>AppContainer.js</h1>
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer;
