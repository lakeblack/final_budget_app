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
      ['Utilities', 175]],
      income: 1500
    }
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses`, {
      context: this,
      state: 'myExpenses',
      asArray: true
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/Income`, {
      context: this,
      state: 'income'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    let runningTotalExpenses = this.state.myExpenses.slice(1,this.state.myExpenses.length).map(expense => expense[1]).reduce((total, current) => total + current);
    let surplus = this.state.income - runningTotalExpenses;
    var styles = {
      block: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#00C96D"
      },
      item: {
        flexGrow: 1,
        fontWeight: "bold",
        bottom: "0px",
        height: "100%",
        marginBottom: 0,
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRight: "1px solid #176E52",
        textAlign: "center"
      },
      income: {
        flexGrow: 1,
        fontWeight: "bold",
        bottom: "0px",
        height: "100%",
        marginBottom: 0,
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRight: "1px solid #176E52",
        textAlign: "center",
        backgroundColor: "#195993"
      },
      expenses: {
        flexGrow: 1,
        fontWeight: "bold",
        bottom: "0px",
        height: "100%",
        marginBottom: 0,
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRight: "1px solid #176E52",
        textAlign: "center",
        backgroundColor: "#C00022"
      }
    }
    return (
      <div style={styles.block}>
        <p style={styles.income}>Income: {this.state.income}</p>
        <p style={styles.expenses}>Total Expenses: {runningTotalExpenses}</p>
        <p style={styles.item}>Surplus: {surplus < 0 ? "You don't make enough, Ass Hole!" : surplus}</p>
      </div>
    )
  }
}

export default TotalExpenses;
