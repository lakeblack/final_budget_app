import React, { Component } from 'react'
import Chart from './Chart.js'
import base from '../config/base'

class Fun extends Component{
  constructor(props){
    super(props);
    this.state = {
      fun: 600
    }
  }
  handleChange(event){
    this.setState({fun: parseInt(event.target.value)});
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`myExpenses/Fun/1`, {
      context: this,
      state: 'fun'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div>
        <p>
          <span>Fun</span>
          <input type='range' min={0} max={1000} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.fun}</span>
        </p>
      </div>
    )
  }
}

export default Fun;
