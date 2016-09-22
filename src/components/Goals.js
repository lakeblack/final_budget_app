import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer'
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import Income from './Income'
import Graph from './Graph'
import Expenses from './Expenses'

class Goals extends Component{
  render(){
    return(
      <div>
        <Dashboard />
        <TotalExpenses />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          </div>

      </div>
    )
  }
}


export default Goals;
