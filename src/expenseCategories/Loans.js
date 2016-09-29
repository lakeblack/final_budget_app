import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'

class Loans extends Component {
  constructor(props){
    super(props);
    this.state = {
      subs: [],
      total: 10
    }
  }
  componentDidMount() {
      this.ref = base.syncState(`${localStorage.UID}/myLoans`, {
          context: this,
          state: 'subs',
          asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/4/1`, {
          context: this,
          state: 'total'
      });
      // base.update(`${localStorage.UID}/myLoans`, {
      //   data: this.state.loans
      // });
    }
    componentWillUnmount() {
      base.removeBinding(this.ref);
      base.removeBinding(this.ref2);
    }
    handleClick(event){
      $('.loans').toggle('slow')
    }
  render(){
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
            top: "0",
            right: "0",
            fontWeight: "900px",
            fontSize: "78px"
        },
    }
    return(
      <div>
        <div style={styles.container} onClick={this.handleClick.bind(this)}>
          <p style={styles.title}>Loans</p>
          <label style={styles.price}>${this.state.total}</label>
          <i className="glyphicon glyphicon-tasks" style={styles.icon}></i>


        </div>
        {this.state.subs.map((loan, index) =>
          <div className="expenses loans" key={index} style={{display: "none"}}>
            <p>{loan.type}:</p>
            <p>{loan.monthlyPayment}</p>
          </div>)}
          <p className="loans" style={{display: "none"}}>(Please see loans page)</p>
      </div>
    )
  }
}

export default Loans


// <div>
//   {this.state.subs.map((expense, index) =>
//     <div className="expenses food" key={index} >
//       <p>
//         <span>{expense.name}:</span>
//         <input type='range' value={expense.value} min={0} max={1000} step={5} onChange={this.handleChange.bind(this, expense, index)}/>
//         <span>{expense.value}</span>
//       </p>
//     </div>
