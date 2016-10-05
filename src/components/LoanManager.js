import React, { Component } from 'react'
import LoanCalc from 'loan-calc'
// import {Chart} from 'react-google-charts'
import base from '../config/base'
import Dashboard from './Dashboard'
// import TotalExpenses from './TotalExpenses'
import $ from 'jquery'
import Nav from './nav'

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
    this.setState({loans: newArray, totalLoanPayment: Math.ceil(currentPayment)});
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
    this.setState({loans: newArray, totalLoanPayment: Math.ceil(currentPayment)});
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
    this.setState({loans: newArray, totalLoanPayment: Math.ceil(currentPayment)});
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
    let styles = {
      wrapper: {
        display:'flex',
        flexWrap:'wrap',
        maxWidth:'100%',
      },
      container:{
        background: "rgba(52, 50, 67, 0.7)",
        width: "400px",
        borderRadius: "5px",
        margin: "20px auto",
        paddingBottom: "20px",
        border: " 1px solid rgba(237, 234, 227, 0.6)",
        padding: "10px"
      },
      heading:{
        display: 'flex',
        borderBottom: "1px solid rgba(237, 234, 227, 0.6)",
        marginBottom: "10px",
        width: "380px"

      },
      title:{
        margin: "5px",
        fontSize: "28px",
        color:"#9abf88"
      },
      payments:{
        margin: "5px",
        fontSize: "20px"
      },
      subCat:{
        display: "flex",
      },
      slider:{
        width: "70%",
      },
      total:{
        textAlign: "center",
        background: "rgba(52, 50, 67, 0.7)",
        border: " 1px solid rgba(237, 234, 227, 0.6)",
        borderRadius: "5px",
        width: "80%",
        margin: "auto",
        padding: "20px",

      },
      extra:{
        borderRadius: "35px",
        padding: "15px",
        background: "#9abf88",
      }
    }
    let currentLoans = this.state.loans.map((loan, index) =>
      <div key={index} style={styles.container}>
          <div style={styles.heading}>
            <p style={styles.title} onClick={this.handleClick.bind(this, loan)}> {loan.type}</p>
          </div>
              <div className={`${loan.type}`}>
                  { loan.type === 'Auto' ? //ternary operation to account for max principal and max months
                    <div>
                      <p style={styles.subCat}>Principal
                        <input style={styles.slider} type='range' value={loan.principal} min={0} max={50000} step={100} onChange={this.handlePrincipal.bind(this, loan, index)}/>
                        {loan.principal}
                        </p>
                        <p style={styles.subCat}>Rate
                        <input style={styles.slider} type='range' value={loan.rate} min={.1} max={20} step={.1} onChange={this.handleRate.bind(this, loan, index)}/>
                        {loan.rate}
                        </p>
                        <p style={styles.subCat}>Months
                        <input style={styles.slider} type='range' value={loan.months} min={1} max={78} step={1} onChange={this.handleMonths.bind(this, loan, index)}/>
                        {loan.months}
                      </p>
                    </div>
                    :
                    <div>
                      <p style={styles.subCat}>Principal
                        <input style={styles.slider} type='range' value={loan.principal} min={0} max={300000} step={100} onChange={this.handlePrincipal.bind(this, loan, index)}/>
                        {loan.principal}
                        </p>
                        <p style={styles.subCat}>Rate
                        <input style={styles.slider} type='range' value={loan.rate} min={.1} max={20} step={.1} onChange={this.handleRate.bind(this, loan, index)}/>
                        {loan.rate}
                        </p>
                        <p style={styles.subCat}>Months
                        <input style={styles.slider} type='range' value={loan.months} min={1} max={360} step={1} onChange={this.handleMonths.bind(this, loan, index)}/>
                        {loan.months}
                      </p>
                    </div>
                    }
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
                <p>Total Interest: ${loan.interestTotal}</p>
                <p>Monthly Payments: ${loan.monthlyPayment}</p>

        </div>
      )
    return(
      <div style={{color:"rgba(237, 234, 227, 0.6)"}}>
        <Dashboard />
          <span className="hidden-sm hidden-md hidden-lg"><Nav/></span>
          {/* <TotalExpenses /> */}
        <div className="col-sm-offset-2 col-md-10 col-md-offset-1 main">
          <h3 style={styles.total} className="loanTotal col-md-offset-1">Total Monthly Payment towards Loans <br/><br/><span style={styles.extra}>${this.state.totalLoanPayment}</span></h3>
            <div style={styles.wrapper}>{currentLoans}</div>
        </div>
      </div>
    )
  }
}
export default LoanManager
