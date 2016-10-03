import React, { Component } from 'react'
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import Income from './Income'
import Graph from './Graph'
import Expenses from './Expenses'
import Nav from './nav'

class Home extends Component{
  render(){
    return(
      <div>
        <Dashboard />
          <div className="col-sm-12 col-sm-offset-2 col-md-offset-1 col-xs-12 main"  style={{padding: "0"}}>
            <span className="hidden-sm hidden-md hidden-lg">
              <Nav/>

            </span>
            <TotalExpenses />
            <span className="hidden-xs"><Income/></span>
            <Graph/>
            <Expenses/>
          </div>

      </div>
    )
  }
}


export default Home;
