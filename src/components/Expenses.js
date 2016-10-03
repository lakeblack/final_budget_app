import React, { Component } from 'react'
import Food from '../expenseCategories/Food'
import Fun from '../expenseCategories/Fun'
import Housing from '../expenseCategories/Housing'
import Loans from '../expenseCategories/Loans'
import Miscellaneous from '../expenseCategories/Miscellaneous'
import Transportation from '../expenseCategories/Transportation'
import Utilities from '../expenseCategories/Utilities'

class Expenses extends Component{
  render () {
    const styles = {
      wrapper: {
        display: "inline-flex",
      }
    }
    return (
      <div style={styles.wrapper}>
        <div className="col-sm-offset-3">
          <Food />
          <Fun />
          <Housing/>

        </div>
        <div className="col-sm-offset-5">

          <Miscellaneous/>
          <Transportation/>
          <Utilities/>
        </div>
      </div>
    )
  }
}

export default Expenses;
