import React, { Component } from 'react'
import base from '../config/base'

class Income extends Component{
  constructor(props){
    super(props);
    this.state = {
      income: 5000,
      text: ''
    }
  }
  handleChange(event){
    this.setState({income: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`${localStorage.UID}/Income`, {
      context: this,
      state: 'income'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="income">
        <p>
          <span>Income</span>
          <input type='range' min={0} max={9999} step={5} value={this.state.income} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.income}</span>
        </p>
      </div>
    )
  }
}

export default Income;
