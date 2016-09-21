import React, { Component } from 'react'
import base from '../config/base'

class Fun extends Component{
  constructor(props){
    super(props);
    this.state = {
      fun: 600
    }
  }
  handleChange(event){
    this.setState({fun: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    base.update(`${localStorage.UID}/myExpenses/Fun`, {
      data: {0: 'Fun'}
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses/Fun/1`, {
      context: this,
      state: 'fun'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="expenses">
        <p>
          <span>Fun</span>
          <input type='range' min={0} max={1000} value={this.state.fun} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.fun}</span>
        </p>
      </div>
    )
  }
}

export default Fun;
