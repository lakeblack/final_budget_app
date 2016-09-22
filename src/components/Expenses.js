import React, { Component } from 'react'
import Housing from '../expenseCategories/Housing'
import Loans from '../expenseCategories/Loans'
import Food from '../expenseCategories/Food'
import Fun from '../expenseCategories/Fun'
import Miscellaneous from '../expenseCategories/Miscellaneous'
import Transportation from '../expenseCategories/Transportation'
import Utilities from '../expenseCategories/Utilities'
import TotalExpenses from './TotalExpenses'

class Expenses extends Component{
  render () {
    return (
      <div>
        <Housing />
        <Loans />
        <Food />
        <Fun />
        <Miscellaneous />
        <Transportation />
        <Utilities />
      </div>
    )
  }
}

export default Expenses;
