import React, { Component } from 'react';
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import moment from 'moment';
import range from 'moment-range'
import {Chart} from 'react-google-charts'

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
      lineData: [['Month', 'Projected', 'Actual'],['placeholder month', 1000, 800]]
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
    var dateStart = moment(this.state.start);
    var dateEnd = moment(this.state.end);
    var timeValues = [['Month', 'Projected', 'Actual']];
    var i = -1;

    let monthlySavings = this.state.goal / this.state.months;

    while (dateEnd >= dateStart) {
       i = i+1;
       timeValues.push([dateStart.format('MMM YYYY'),  monthlySavings * i, 0]);
       dateStart.add(1,'month');
       //console.log(timeValues);
    }

    this.setState({lineData: timeValues})
  }
  handleInput(point, event){
    event.preventDefault();
    let newArray = this.state.lineData.map((item, index) => {
        if (item[0] === point[0]){
          return  [point[0], point[1], parseInt(event.target.value, 10)];
        } else {
          return item;
        }
      }
    );
    //console.log(newArray);
    this.setState({lineData: newArray });
  }
  render(){
    let dailySavings = this.state.goal / this.state.days
    let weeklySavings = this.state.goal / this.state.weeks
    let monthlySavings = this.state.goal / this.state.months

    return(
      <div>
        <Dashboard />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1>Savings Goal</h1>
            <p>Goal: ${this.state.goal}</p>
            <input id="toggle" type='range' min={0} max={9999} step={5} value={this.state.goal} ref="goal" onChange={this.handleChange.bind(this)}/>

            <input type="date" ref="start" onChange={this.handleStart.bind(this)}/>
            <input type="date" ref="end" onChange={this.handleEnd.bind(this)}/>
            <button onClick={this.handleTime.bind(this)}>time left</button>
            <p>{ dailySavings === Infinity ? null : "days:" + this.state.days + " $" + Math.floor(dailySavings)}</p>
            <p>{ weeklySavings === Infinity ? null: "weeks:" + this.state.weeks + " $" + Math.floor(weeklySavings)}</p>
            <p>{ monthlySavings === Infinity ? null: "months:" + this.state.months + " $" + Math.floor(monthlySavings)}</p>

            <button onClick={this.generateChart.bind(this)}>Generate Chart</button>
              <Chart chartType="AreaChart" data={this.state.lineData} options={this.state.areaOptions} width={"45%"} height={"400px"}/>
              {this.state.lineData.slice(1, this.state.lineData.length).map((point, index) =>
                <div key={index}>
                  <h4>{point[0]}</h4>
                  <p>Projected: {point[1]}</p>
                  <p>Actual:<input type="text" onChange={this.handleInput.bind(this, point)}/></p>
                </div>)}
          </div>


      </div>
    )
  }
}


export default Goals;
