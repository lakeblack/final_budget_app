import React, { Component } from 'react'
import base from '../config/base'

class Food extends Component{
  constructor(props){
    super(props);
    this.state = {
      food: 600,
      text: 'food'
    }
  }
  handleChange(event){
    this.setState({food: parseInt(event.target.value, 10)});
  }
  componentDidMount() {
    this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses/Food/1`, {
      context: this,
      state: 'food'
    });
   }
   componentWillUnmount(){
     base.removeBinding(this.rebaseRef);
   }
  render () {
    return (
      <div className="expenses">
        <p>
          <span>Food</span>
          <input type='range' min={0} max={1000} step={5} value={this.state.food} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.food}</span>
        </p>
      </div>
    )
  }
}

export default Food;
