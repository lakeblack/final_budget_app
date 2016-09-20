import React, { Component } from 'react';


class HomeContainer extends Component{
  render(){
    return(
      <div className="home">
      <label> Income</label><input type="range" className="income"/>
      <label> Housing</label><input type="range" className="expenses"/>
      <label> Transportation</label><input type="range" className="expenses"/>
      <label> Utilities</label><input type="range" className="expenses"/>
      <label> Entertainment</label><input type="range" className="expenses"/>
      <label> Loans</label><input type="range" className="expenses"/>
      <label> Food</label><input type="range" className="expenses"/>
      <label> Miscellaneous</label><input type="range" className="expenses"/>

      </div>
    )
  }
}

export default HomeContainer;
