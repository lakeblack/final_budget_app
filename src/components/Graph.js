import React, { Component } from 'react'
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
      pieOptions: {
        backgroundColor: 'none',
        is3D: false,
        pieSliceBorderColor: 'none',
        legend: {textStyle: {color: 'black'}},
        titleTextStyle: {color: 'black'},
        colors: ["#e279a3","#7fb4c7","#8266ac","#9abf88","#e2975d","#e9d78e","#c94a53"]
      },
      barOptions: {
        backgroundColor: 'none',
        legend: { position: 'none' },
        colors: ['#9abf88'],

      },
  }
}
  componentDidMount() {
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses`, {
      context: this,
      state: 'data',
      asArray: true
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
      <div>
        <div className={"my-pretty-chart-container"}>

          <Chart chartType="PieChart" data={this.state.data} options={this.state.pieOptions} width={"500px"} height={"400px"} legend_toggle={true} />

          <Chart chartType="BarChart" data={this.state.data} options={this.state.barOptions} width={"500px"} height={"400px"} />
        </div>

      </div>
    )
  }
}


export default PieChart;
