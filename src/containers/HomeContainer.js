import React, { Component } from 'react';


class HomeContainer extends Component{
  render(){
    return(
      <div className="home">
        <form>
          <label> Income</label><input type="range" className="income"/>
        </form>
        <form>
          <label> Housing</label><input type="range" className="expenses"/>

        </form>
        <form>
          <label> Transportation</label><input type="range" className="expenses"/>

        </form>
        <form>
          <label> Utilities</label><input type="range" className="expenses"/>

        </form>
        <form>
          <label> Entertainment</label><input type="range" className="expenses"/>

        </form>
        <form>
          <label> Loans</label><input type="range" className="expenses"/>

        </form>
        <form>
          <label> Food</label><input type="range" className="expenses"/>

        </form>
        <form>
          <label> Miscellaneous</label><input type="range" className="expenses"/>

        </form>


      </div>
    )
  }
}

export default HomeContainer;
