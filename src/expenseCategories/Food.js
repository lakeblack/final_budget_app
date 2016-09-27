import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'

class Food extends Component{
  constructor(props){
    super(props);
    this.state = {
      subs: [],
      total: 10
    }
  }
  handleChange(expense, index, event){
    let newArray = this.state.subs.map((item, index) => {
        if (item.name === expense.name){
          return {name: expense.name, value: parseInt(event.target.value, 10)};
        } else {
          return item;
        }
      }
    );
    let currentTotal = newArray.map((sub, index) => sub.value).reduce((total, current) => total + current);
    this.setState({subs: newArray, total: currentTotal });
    // console.log(this.state.categories[index].value);
  }
  componentDidMount() {
      this.ref = base.syncState(`${localStorage.UID}/myFood`, {
        context: this,
        state: 'subs',
        asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/1/1`, {
        context: this,
        state: 'total'
      });
   }
  componentWillUnmount(){
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }
  handleClick(event){
    $(".food").toggle("slow");
  }
  render () {
    return (
      <div>
        {this.state.subs.map((expense, index) =>
          <div className="expenses food" key={index}>
            <p>
              <span>{expense.name}:</span>
              <input type='range' value={expense.value} min={0} max={1000} step={5} onChange={this.handleChange.bind(this, expense, index)}/>
              <span>{expense.value}</span>
            </p>
          </div>
        )}
        <p onClick={this.handleClick.bind(this)}>Food: {this.state.total}</p>
      </div>
    )
  }
}

export default Food;
