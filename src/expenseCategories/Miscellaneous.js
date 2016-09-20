import React, { Component } from 'react'
import base from '../config/base'

class Miscellaneous extends Component{
  constructor(props){
    super(props);
    this.state = {
      miscellaneous: 200
    }
  }
  handleChange(event){
    this.setState({miscellaneous: parseInt(event.target.value)});
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`myExpenses/Miscellaneous/1`, {
      context: this,
      state: 'miscellaneous'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="expenses">
        <p>
          <span>Miscellaneous</span>
          <input type='range' min={0} max={1000} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.miscellaneous}</span>
        </p>
      </div>
    )
  }
}

export default Miscellaneous;
