import React, { Component } from 'react'
import Food from '../expenseCategories/Food'
import Fun from '../expenseCategories/Fun'
import Housing from '../expenseCategories/Housing'
import Loans from '../expenseCategories/Loans'
import Miscellaneous from '../expenseCategories/Miscellaneous'
import Transportation from '../expenseCategories/Transportation'
import Utilities from '../expenseCategories/Utilities'
import Income from './Income'

class Expenses extends Component{
  render () {
    const styles = {
      wrapper: {
        display: "flex",
        flexWrap: "wrap",
      },
      income:{
        margin: "20px",
      }
    }
    return (
        <div style={styles.wrapper}>
          <span style={styles.income} className="hidden-sm hidden-md hidden-lg"><Income/></span>
          <Food />
          <Fun />
          <Housing/>
          <Miscellaneous/>
          <Transportation/>
          <Utilities/>
          <Loans/>
        </div>
    )
  }
}

export default Expenses;
