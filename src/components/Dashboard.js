import React, { Component } from 'react';
import {Link} from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import Graph from './Graph'
import Expenses from './Expenses'
import Income from './Income'
import base from '../config/base'

class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      totalIncome: "",
      totalExpenses: "",
      surplus:""
    }
  }
  componentDidMount(){
    this.rebaseRef = base.syncState(`${localStorage.UID}/Income`, {
      context: this,
      state: 'totalIncome'
    });
    this.rebaseRef = base.syncState(`${localStorage.UID}/totalExpenses`, {
      context: this,
      state: 'totalExpenses'
    });
    let totalIncome = this.state.totalIncome;
    let totalExpenses = this.state.totalExpenses;
    this.setState({
      surplus: totalIncome - totalExpenses
    })
  }
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                              Total Income:{this.state.totalIncome}
                            </li>
                            <li>
                              Total Expenses:{this.state.totalExpenses}
                            </li>
                            <li>
                              Surplus:{this.state.surplus}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

     <div className="container-fluid">
         <div className="col-sm-2 col-md-1 sidebar">
           <ul className="nav nav-sidebar">
             <li><i className="glyphicon glyphicon-user"></i></li>
             <li><i className="glyphicon glyphicon-usd"></i></li>
             <li><i className="glyphicon glyphicon-credit-card"></i></li>
             <li><i className="glyphicon glyphicon-piggy-bank"></i></li>
             <li><i className="glyphicon glyphicon-calendar"></i></li>
           </ul>
         </div>
         <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
           <Income/>
           <Graph/>
           <Expenses />
         </div>
     </div>

     </div>

    )
  }
}

export default Dashboard;
