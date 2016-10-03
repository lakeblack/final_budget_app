import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'
import { Link } from 'react-router'

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
      wrapper: {
          background: "rgba(52, 50, 67, 0.7)",
          width: "300px",
          borderRadius: "5px",
          margin: "20px",
          border: " 1px solid rgba(237, 234, 227, 0.6)",
          color: "#9abf88",
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
        subCat: {
      margin: "5px",
    }

    }
    return(
      <div style={styles.wrapper}>
        <div style={styles.container} onClick={this.handleClick.bind(this)}>
          <p style={styles.title}>Loans
            <label style={styles.price}>${this.state.total}</label>
          </p>


        </div>
        {this.state.subs.map((loan, index) =>
          <div className="expenses loans" key={index}>
            <p style={styles.subCat}>{loan.type}: ${loan.monthlyPayment}</p>
          </div>)}
          <p style={styles.subCat} className="loans">(Please see <Link to={`/loan/${localStorage.UID}`}>loans page)</Link></p>
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
