import React, { Component } from 'react'
import {render} from 'react-dom'
import {Chart} from 'react-google-charts'

class PieChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: '',
      options: ''
    }
  }
  componentDidMount() {

  let options = {
      title: 'Expenses Comparison',
      is3D: true
  };

  let data = [
    ['Expense Category', 'Monthly Cost'],
      ['Rent',     750],
      ['Loans',      450],
      ['Food',  600],
      ['Fun', 200],
      ['Miscelleanous',    200]
  ];
  this.setState({
      'data' : data,
      'options' : options
   });


 }
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart chartType="PieChart" data={this.state.data} options={this.state.options} width={"100%"} height={"400px"} legend_toggle={true} />
      </div>
    )
  }
}

export default PieChart;
