import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'

class Loans extends Component {
  constructor(props){
    super(props);
    this.state = {
      subs: [],
      total: 10
    }
  }
  componentDidMount() {
      this.ref = base.syncState(`${localStorage.UID}/myLoans`, {
          context: this,
          state: 'subs',
          asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/4/1`, {
          context: this,
          state: 'total'
      });
      // base.update(`${localStorage.UID}/myLoans`, {
      //   data: this.state.loans
      // });
    }
    componentWillUnmount() {
      base.removeBinding(this.ref);
      base.removeBinding(this.ref2);
    }
    handleClick(event){
      $('.loans').toggle('slow')
    }
  render(){
    console.log();
    return(
      <div>
        {this.state.subs.map((loan, index) =>
          <div className="expenses loans" key={index}>
            <p>{loan.type}</p>
            <p>{loan.monthlyPayment}</p>
          </div>)}
        <p onClick={this.handleClick.bind(this)}>Loans: {this.state.total}</p>
        <p>(Please see loans page)</p>
      </div>
    )
  }
}

export default Loans
