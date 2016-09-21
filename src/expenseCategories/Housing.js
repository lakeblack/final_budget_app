import React, { Component } from 'react'
import base from '../config/base'

class Housing extends Component{
  constructor(props){
    super(props);
    this.state = {
      housing: 800
    }
  }
  handleChange(event){
    this.setState({housing: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    base.update(`${localStorage.UID}/myExpenses/Housing`, {
      data: {0: 'Housing'}
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses/Housing/1`, {
      context: this,
      state: 'housing'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="expenses">
        <p>
          <span>Housing</span>
          <input type='range' min={0} max={2000} step={5} value={this.state.housing} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.housing}</span>
        </p>
      </div>
    )
  }
}

export default Housing;
