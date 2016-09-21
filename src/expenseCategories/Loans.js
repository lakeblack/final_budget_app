import React, { Component } from 'react'
import base from '../config/base'

class Loans extends Component{
  constructor(props){
    super(props);
    this.state = {
      loans: 400
    }
  }
  handleChangeLoans(event){
    this.setState({loans: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    base.update(`${localStorage.UID}/myExpenses/Loans`, {
      data: {0: 'Loans'}
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses/Loans/1`, {
      context: this,
      state: 'loans'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="expenses">
        <p>
          <span>Loans</span>
          <input type='range' min={0} max={1000} value={this.state.loans} onChange={this.handleChangeLoans.bind(this)}/>
          <span>{this.state.loans}</span>
        </p>
      </div>
    )
  }
}

export default Loans;
