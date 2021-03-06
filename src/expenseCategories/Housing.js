import React, { Component } from 'react'
import base from '../config/base'
import $ from 'jquery'

class Housing extends Component{
  constructor(props){
    super(props);
    this.state = {
      subs: [],
      total: 10
    }
  }
  handleChange(expense, index, event){
    let newArray = this.state.subs.map((item, index) => {
        if (item.name === expense.name){
          return {name: expense.name, value: parseInt(event.target.value, 10)};
        } else {
          return item;
        }
      }
    );
    let currentTotal = newArray.map((sub, index) => sub.value).reduce((total, current) => total + current);
    this.setState({subs: newArray, total: currentTotal });
    // console.log(this.state.categories[index].value);
  }
  componentDidMount() {
      this.ref = base.syncState(`${localStorage.UID}/myHousing`, {
        context: this,
        state: 'subs',
        asArray: true
      });
      this.ref2 = base.syncState(`${localStorage.UID}/myExpenses/3/1`, {
        context: this,
        state: 'total'
      });
   }
  componentWillUnmount(){
    base.removeBinding(this.ref);
    base.removeBinding(this.ref2);
  }
  handleClick(event){
    $(".housing").toggle("slow");
  }
  render () {
    const styles = {
      wrapper: {
          background: "rgba(52, 50, 67, 0.7)",
          borderRadius: "5px",
          margin: "20px",
          border: " 1px solid rgba(237, 234, 227, 0.6)",
          color: "#8266ac",
          minWidth: "350px",

      },
        container: {
            position: "relative",
            width: "90%",
            borderBottom: "1px solid rgba(237, 234, 227, 0.6)",
            margin: "10px"
        },
        title: {
            fontFamily: "Oswald",
            fontSize: "28px",
            margin: "10px"
        },
        price: {
            float: "right",
        },
        slider: {
            width: "40%",
            margin: "auto 10px",
            display: "inline-flex"
        },
        subCat: {
          margin: "5px",
        }

    }
    return (
      <div style={styles.wrapper} className="col-sm-3 col-sm-offset-3">
        <div style={styles.container} onClick={this.handleClick.bind(this)}>
          <p style={styles.title}>Housing
            <span style={styles.price}>${this.state.total}</span>

          </p>

        </div>
        {this.state.subs.map((expense, index) =>
          <div className="expenses housing" key={index}>
            <p style={styles.subCat}>
              <span>{expense.name}:</span>
              <input style={styles.slider} type='range' value={expense.value} min={0} max={2000} step={5} onChange={this.handleChange.bind(this, expense, index)}/>
              <span>${expense.value}</span>
            </p>
          </div>
        )}

      </div>
    )
  }
}

export default Housing;
