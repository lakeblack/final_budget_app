import React, { Component } from 'react';
import Dashboard from './Dashboard'
import TotalExpenses from './TotalExpenses'
import Food from '../expenseCategories/Food'
import Fun from '../expenseCategories/Fun'
import Housing from '../expenseCategories/Housing'
import Loans from '../expenseCategories/Loans'
import Miscellaneous from '../expenseCategories/Miscellaneous'
import Transportation from '../expenseCategories/Transportation'
import Utilities from '../expenseCategories/Utilities'

class Goals extends Component{
  render(){
    return(
      <div>
        <Dashboard />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <Food />
            <Fun />
            <Housing/>
            <Miscellaneous/>
            <Transportation/>
            <Utilities/>

          </div>

      </div>
    )
  }
}


export default Goals;
