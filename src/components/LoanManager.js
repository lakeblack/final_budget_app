import React, { Component } from 'react'
import LoanCalc from 'loan-calc'
import {Chart} from 'react-google-charts'
import base from '../config/base'
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import $ from 'jquery'

class LoanManager extends Component{
  constructor(props){
    super(props);
    this.state = {
      loans: [],
        totalLoanPayment: 0
    }
  }
  handlePrincipal(loan, index, event){
    //console.log(event.target.value);
    let newArray = this.state.loans.map((item, index) => {
        if (item.type === loan.type){
          return {type: loan.type,
                  principal: parseInt(event.target.value, 10),
                  rate: loan.rate,
                  months: loan.months,
                monthlyPayment: parseInt(event.target.value, 10) === 0 ? 0 : LoanCalc.paymentCalc({
                    amount: parseInt(event.target.value, 10),
                    rate: loan.rate,
                    termMonths: loan.months
                }),
              interestTotal: parseInt(event.target.value, 10) === 0 ? 0 : LoanCalc.totalInterest({
                  amount: parseInt(event.target.value, 10),
                  rate: loan.rate,
                  termMonths: loan.months
              })};
        } else {
          return item;
        }
      }
    );
    let currentPayment = newArray.map((loan, index) => loan.monthlyPayment).reduce((total, current) => total + current);
    this.setState({loans: newArray, totalLoanPayment: currentPayment});
  }
  handleRate(loan, index, event){
    let newArray = this.state.loans.map((item, index) => {
        if (item.type === loan.type){
          return {type: loan.type,
                  principal: loan.principal,
                  rate: parseFloat(event.target.value, 10),
                  months: loan.months,
                monthlyPayment: LoanCalc.paymentCalc({
                    amount: loan.principal,
                    rate: parseFloat(event.target.value, 10),
                    termMonths: loan.months
                }),
              interestTotal: LoanCalc.totalInterest({
                  amount: loan.principal,
                  rate: parseFloat(event.target.value, 10),
                  termMonths: loan.months
              })};
        } else {
          return item;
        }
      }
    );
    let currentPayment = newArray.map((loan, index) => loan.monthlyPayment).reduce((total, current) => total + current);
    this.setState({loans: newArray, totalLoanPayment: currentPayment});
  }
  handleMonths(loan, index, event){
    let newArray = this.state.loans.map((item, index) => {
        if (item.type === loan.type){
          return {type: loan.type,
                  principal: loan.principal,
                  rate: loan.rate,
                  months: parseInt(event.target.value, 10),
                monthlyPayment: LoanCalc.paymentCalc({
                    amount: loan.principal,
                    rate: loan.rate,
                    termMonths: parseInt(event.target.value, 10)
                }),
              interestTotal: LoanCalc.totalInterest({
                  amount: loan.principal,
                  rate: loan.rate,
                  termMonths: parseInt(event.target.value, 10)
              })};
        } else {
          return item;
        }
      }
    );
    let currentPayment = newArray.map((loan, index) => loan.monthlyPayment).reduce((total, current) => total + current);
    this.setState({loans: newArray, totalLoanPayment: currentPayment});
  }
  componentDidMount() {
      this.ref = base.syncState(`${localStorage.UID}/myLoans`, {
          context: this,
          state: 'loans',
          asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/4/1`, {
          context: this,
          state: 'totalLoanPayment'
      });
      // base.update(`${localStorage.UID}/myLoans`, {
      //   data: this.state.loans
      // });
  }
  componentWillUnmount() {
      base.removeBinding(this.ref);
      base.removeBinding(this.ref2);
  }
  handleClick(loan, event){
    $(`.${loan.type}`).toggle('slow');
  }
  render(){
    // console.log(this.state.loans.map((loan, index) =>
    //   "Type:" + loan.type + " " +
    //   "Principal:" + loan.principal + " " +
    //   "Rate:" + loan.rate + " " +
    //   "Months:" + loan.months
    // ));
    let currentLoans = this.state.loans.map((loan, index) =>
      <div key={index} style={{minWidth:'45%', margin:'10px'}}>
          <h3 onClick={this.handleClick.bind(this, loan)}>{loan.type}</h3>
              <div className={`${loan.type}`}>
                  { loan.type === 'Auto' ? //ternary operation to account for max principal and max months
                    <div>
                      <p>Principal
                        <input type='range' value={loan.principal} min={0} max={50000} step={100} onChange={this.handlePrincipal.bind(this, loan, index)}/>
                        {loan.principal}
                        </p>
                        <p>Rate
                        <input type='range' value={loan.rate} min={.1} max={20} step={.1} onChange={this.handleRate.bind(this, loan, index)}/>
                        {loan.rate}
                        </p>
                        <p>Months
                        <input type='range' value={loan.months} min={1} max={78} step={1} onChange={this.handleMonths.bind(this, loan, index)}/>
                        {loan.months}
                      </p>
                    </div>
                    :
                    <div>
                      <p>Principal
                        <input type='range' value={loan.principal} min={0} max={300000} step={100} onChange={this.handlePrincipal.bind(this, loan, index)}/>
                        {loan.principal}
                        </p>
                        <p>Rate
                        <input type='range' value={loan.rate} min={.1} max={20} step={.1} onChange={this.handleRate.bind(this, loan, index)}/>
                        {loan.rate}
                        </p>
                        <p>Months
                        <input type='range' value={loan.months} min={1} max={360} step={1} onChange={this.handleMonths.bind(this, loan, index)}/>
                        {loan.months}
                      </p>
                    </div>
                    }
                  <p>Monthly Payment: {loan.monthlyPayment}</p>
                  <p>Total Interest: {loan.interestTotal}</p>
                  {/* <Chart className={"my-pretty-chart-container"} chartType="PieChart"
                  data={[
                    ['Principal', 'Interest'],
                    ['Principal', loan.principal],
                    ['Interest', loan.interestTotal]
                  ]}
                  width={"100%"}
                  height={"400px"}
                  legend_toggle={true} /> */}
                </div>
        </div>
      )
    return(
      <div>
        <Dashboard />
        {/* <TotalExpenses /> */}
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1>Loans</h1>
            <div style={{display:'flex', flexWrap:'wrap', maxWidth:'100%'}}>{currentLoans}</div>
          <h3>Total Monthly Payment towards Loans: ${this.state.totalLoanPayment}</h3>
        </div>
      </div>
    )
  }
}
export default LoanManager
