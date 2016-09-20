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
    this.setState({utilities: parseInt(event.target.value)});
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`myExpenses/Utilities/1`, {
      context: this,
      state: 'utilities'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div>
        <p>
          <span>Utilities</span>
          <input type='range' min={0} max={1000} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.utilities}</span>
        </p>
      </div>
    )
  }
}

export default Utilities;