import React, { Component } from 'react'
import base from '../config/base'

class TotalExpenses extends Component{
  constructor(props){
    super(props);
    this.state = {
      myExpenses: [['Expense Category', 'Monthly Cost'],
      ['Food', 350],
      ['Fun', 800],
      ['Housing', 800],
      ['Loans', 450],
      ['Miscelleanous', 200],
      ['Transportation', 100],
      ['Utilities', 175]]
    }
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses`, {
      context: this,
      state: 'myExpenses',
      asArray: true
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    console.log(this.state.myExpenses.slice(1,this.state.myExpenses.length).map(expense => expense[1]).reduce((total, current) => total + current));
    return (
      <div>
        TotalExpenses Component
      </div>
    )
  }
}

export default TotalExpenses;
