import React, { Component } from 'react'
import ExpenseCategories from '../expenseCategories/ExpenseCategories'

class Expenses extends Component{
  render () {
    return (
      <div>
        <ExpenseCategories />
      </div>
    )
  }
}

export default Expenses;
