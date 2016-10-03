import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'

class Miscellaneous extends Component{
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
      this.ref = base.syncState(`${localStorage.UID}/myMiscellaneous`, {
        context: this,
        state: 'subs',
        asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/5/1`, {
        context: this,
        state: 'total'
      });
   }
  componentWillUnmount(){
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }
  handleClick(event){
    $(".miscellaneous").toggle("slow");
  }
  render () {
    const styles = {
      wrapper: {
          background: "rgba(52, 50, 67, 0.7)",
          width: "300px",
          borderRadius: "5px",
          margin: "20px",
          border: " 1px solid rgba(237, 234, 227, 0.6)",
          color: "#e2975d",
      },
        container: {
            position: "relative",
            width: "280px",
            borderBottom: "1px solid rgba(237, 234, 227, 0.6)",
            margin: "10px"
        },
        title: {
            fontFamily: "Oswald",
            fontSize: "28px",
            margin: "10px"
        },
        price: {
            float: "right",
        },
        slider: {
            width: "40%",
            margin: "auto 10px",
            display: "inline-flex"
        },

    }
    return (
      <div style={styles.wrapper}>
        <div style={styles.container} onClick={this.handleClick.bind(this)}>
          <p style={styles.title}>Miscellaneous
            <span style={styles.price}>${this.state.total}</span>
          </p>


        </div>
        {this.state.subs.map((expense, index) =>
          <div className="expenses miscellaneous" key={index}>
            <p>
              <span>{expense.name}:</span>
              <input style={styles.slider} type='range' value={expense.value} min={0} max={1000} step={5} onChange={this.handleChange.bind(this, expense, index)}/>
              <span>${expense.value}</span>
            </p>
          </div>
        )}

      </div>
    )
  }
}

export default Miscellaneous;
