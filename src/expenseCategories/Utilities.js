import React, { Component } from 'react'
import base from '../config/base'

class Utilities extends Component{
  constructor(props){
    super(props);
    this.state = {
      utilities: 175
    }
  }
  handleChange(event){
    this.setState({utilities: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    base.update(`${localStorage.UID}/myExpenses/Utilities`, {
      data: {0: 'Utilities'}
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses/Utilities/1`, {
      context: this,
      state: 'utilities'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="expenses">
        <p>
          <span>Utilities</span>
          <input type='range' min={0} max={1000} value={this.state.utilities} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.utilities}</span>
        </p>
      </div>
    )
  }
}

export default Utilities;
