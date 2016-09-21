import React, { Component } from 'react'
import base from '../config/base'

class Income extends Component{
  constructor(props){
    super(props);
    this.state = {
      Income: 0,
      text: ''
    }
  }
  handleChange(event){
    this.setState({Income: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    base.update(`${localStorage.UID}/Income`, {
      data: {0: ''}
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/Income`, {
      context: this,
      state: 'Income'
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
          <input type='range' min={0} max={999999} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.Income}</span>
        </p>
      </div>
    )
  }
}

export default Income;
