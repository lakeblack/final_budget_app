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
    this.setState({housing: parseInt(event.target.value)});
  }
  componentDidMount() {
    base.update(`${localStorage.UID}/myExpenses/Housing`, {
      data: {0: 'Housing'},
        then(err){
          if(!err){
            console.log(err);
          }
        }
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
          <input type='range' min={0} max={2000} onChange={this.handleChange.bind(this)}/>
          <span>{this.state.housing}</span>
        </p>
      </div>
    )
  }
}

export default Housing;
