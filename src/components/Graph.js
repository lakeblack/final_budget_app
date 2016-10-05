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
        legend: {textStyle: {color: 'white'}},
        titleTextStyle: {color: 'black'},
        colors: ["#e279a3","#7fb4c7","#8266ac","#9abf88","#e2975d","#e9d78e","#c94a53"]
      },
      barOptions: {
        backgroundColor: 'none',
        legend: { position: 'none' },
        colors: ['#e2975d'],
        hAxis: {textStyle:{
          color:"rgb(237, 234, 227)"
        }},
        vAxis: {textStyle:{
          color: "rgb(237, 234, 227)"
        }}

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
    let styles ={
      container:{
        background: "rgba(52, 50, 67, 0.7)",
        borderRadius: "5px",
        border: " 1px solid rgba(237, 234, 227, 0.6)",
        color: "rgba(237, 234, 227, 0.6)",
        margin: "20px",
        maxWidth: "534.50px",

      },
      container2:{
        background: "rgba(52, 50, 67, 0.7)",
        borderRadius: "5px",
        border: " 1px solid rgba(237, 234, 227, 0.6)",
        color: "rgba(237, 234, 227, 0.6)",
        maxWidth: "534.50px"

      },
    }
    return (
      <div className="row col-sm-12" style={styles.wrapper}>
        <div className={"my-pretty-chart-container"}>
          <div style={styles.container} className="col-md-5 col-md-offset-2 pie">
            <h2></h2>
            <Chart chartType="PieChart" data={this.state.data} options={this.state.pieOptions} width={"350px"} height={"350px"} legend_toggle={true} />
          </div>
          <div style={styles.container2} className="col-md-5 col-md-offset-2 bar">
            <Chart chartType="BarChart" data={this.state.data} options={this.state.barOptions} width={"350px"} height={"350px"} />
          </div>
        </div>

      </div>
    )
  }
}


export default PieChart;
