import React, { Component } from 'react'
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import Income from './Income'
import Graph from './Graph'
import Expenses from './Expenses'

class Home extends Component{
  render(){
    return(
      <div>
        <Dashboard />
        <TotalExpenses />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <Income/>
            <Graph/>
            <Expenses/>
          </div>

      </div>
    )
  }
}


export default Home;
