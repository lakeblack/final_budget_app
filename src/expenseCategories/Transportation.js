import React, { Component } from 'react'
import base from '../config/base'

class Transportation extends Component{
  constructor(props){
    super(props);
    this.state = {
      transportation: 450
    }
  }
  handleChange(event){
    this.setState({transportation: parseInt(event.target.value)});
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`myExpenses/Transportation/1`, {
      context: this,
      state: 'transportation'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div>
        <p>
          <span>Transportation</span>
          <input type='range' min={0} max={1000} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.transportation}</span>
        </p>
      </div>
    )
  }
}

export default Transportation;
