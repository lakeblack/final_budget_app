import React, { Component } from 'react'
import {render} from 'react-dom'
import {Chart} from 'react-google-charts'
import base from '../config/base'

class PieChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [['Expense Category', 'Monthly Cost'],
      ['Food', 350],
      ['Fun', 800],
      ['Housing', 800],
      ['Loans', 450],
      ['Miscelleanous', 200],
      ['Transportation', 100],
      ['Utilities', 175]],
      options: {
        backgroundColor: 'none',
        is3D: true,
        legend: {textStyle: {color: 'white'}},
        titleTextStyle: {color: 'white'}
      },
      myExpenses: []
    }
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses`, {
      context: this,
      state: 'myExpenses',
      asArray: true
    });
    base.update(`${localStorage.UID}/myExpenses`, {
      data: {0: {0:'Expense', 1:'Cost'}},
        then(err){
          if(!err){
            console.log(err);
          }
        }
    });
  }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
   handleClick(event){
     event.preventDefault();
     let expensesArray = this.state.myExpenses;
     this.setState({
         'data' : expensesArray
      });

   }
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart chartType="PieChart" data={this.state.data} options={this.state.options} width={"100%"} height={"400px"} legend_toggle={true} />
        <button onClick={this.handleClick.bind(this)}>Calculate Expenses</button>
      </div>
    )
  }
}

export default PieChart;
