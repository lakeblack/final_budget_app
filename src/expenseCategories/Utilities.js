import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'

class Utilities extends Component{
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
      this.ref = base.syncState(`${localStorage.UID}/myUtilities`, {
        context: this,
        state: 'subs',
        asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/7/1`, {
        context: this,
        state: 'total'
      });
   }
  componentWillUnmount(){
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }
  handleClick(event){
    $(".utilities").toggle("slow");
  }
  render () {
    const styles = {
        container: {
            position: "relative",
            background: "#3084CA",
            color: "#276FA0",
            width: "300px",
            height: "100px",
            borderRadius: "5px"
        },
        title: {
            fontFamily: "Oswald",
            fontSize: "24px",
            margin: "10px"
        },
        price: {
            fontFamily: "Abril Fatface",
            position: "absolute",
            top: "25px",
            fontSize: "48px"
        },
        icon: {
            color: "#276FA0",
            position: "absolute",
            top: "-68px",
            right: "0",
            fontWeight: "900px",
            fontSize: "78px"
        },
    }
    return (
      <div>
        <div style={styles.container} onClick={this.handleClick.bind(this)}>
          <p style={styles.title}>Utilities</p>
          <label style={styles.price}>${this.state.total}</label>
          <i className="glyphicon glyphicon-tasks" style={styles.icon}></i>


        </div>
        {this.state.subs.map((expense, index) =>
          <div className="expenses utilities" key={index} style={{display: "none"}}>
            <p>
              <span>{expense.name}:</span>
              <input type='range' value={expense.value} min={0} max={1000} step={5} onChange={this.handleChange.bind(this, expense, index)}/>
              <span>{expense.value}</span>
            </p>
          </div>
        )}

      </div>
    )
  }
}

export default Utilities;
