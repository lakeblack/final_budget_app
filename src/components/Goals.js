import React, { Component } from 'react';
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import moment from 'moment';
import range from 'moment-range'

class Goals extends Component{
  constructor(){
    super()
    this.state ={
      goal: 5000,
      start: "",
      end: "",
      days: "",
      weeks: "",
      months: "",
    }
  }
  handleChange(event) {
      this.setState({
          goal: parseInt(event.target.value, 10)
      });
  }
  handleStart(e){
    //console.log(this.refs.start.value);
    let startDate = this.refs.start.value;
    this.setState({
      start: startDate,
    })
  }
  handleEnd(e){
    //console.log(this.refs.end.value);
    let endDate = this.refs.end.value;
    this.setState({
      end: endDate,
    })
  }
  handleTime(e){
    var start = moment(this.state.start, "YYYY-MM-DD");
    var end   = moment(this.state.end, "YYYY-MM-DD");
    var range = moment.range(start, end);
    this.setState({
      days: range.diff('days'),
      weeks: range.diff('weeks'),
      months: range.diff('months'),

    })
  }
  generateChart(event){
    event.preventDefault();
    for (let i = parseInt(moment(this.state.start).format('M')); i < parseInt(moment(this.state.end).format('M')); i++){
      console.log(moment(i-1).format('M'));
    }
    // console.log("start " + moment(this.state.start).format('MMM'));
    //console.log(parseInt(moment(this.state.start).format('M')));
    // console.log("end " + moment(this.state.end).format('MMM'));
    //console.log(parseInt(moment(this.state.end).format('M')));
  }
  render(){
    let dailySavings = this.state.goal / this.state.days
    let weeklySavings = this.state.goal / this.state.weeks
    let monthlySavings = this.state.goal / this.state.months

    return(
      <div>
        <Dashboard />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <input type="date" ref="start" onChange={this.handleStart.bind(this)}/>
            <input type="date" ref="end" onChange={this.handleEnd.bind(this)}/>
            <button onClick={this.generateChart.bind(this)}>Generate Chart</button>
            <p>{this.state.start}</p>
            <p>{this.state.end}</p>
            <div>
              <p>Savings Goal</p>
              <label>${this.state.goal}</label>
              <i className="glyphicon glyphicon-usd"></i>
            </div>
            <input id="toggle" type='range' min={0} max={9999} step={5} value={this.state.goal} ref="goal" onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handleTime.bind(this)}>time left</button>

            <p>days:{this.state.days} { dailySavings === Infinity ? 0 : "$" + Math.floor(dailySavings)}</p>
            <p>weeks:{this.state.weeks} { weeklySavings === Infinity ? 0 : "$" + Math.floor(weeklySavings)}</p>
            <p>months:{this.state.months} { monthlySavings === Infinity ? 0 : "$" + Math.floor(monthlySavings)}</p>

          </div>


      </div>
    )
  }
}


export default Goals;
