import React, { Component } from 'react'
import base from '../config/base'

class ExpenseCategories extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories: [
        ['Expense Category', 'Monthly Cost'],
        ['placeholder', 0]
      ],
      showSlider: false,
    }
    this.onClick = this.onClick.bind(this)
  }
  handleChange(expense, index, event){
    let newArray = this.state.categories.map((item, index) => {
        if (item[0] === expense[0]){
          return  [expense[0], parseInt(event.target.value, 10)];
        } else {
          return item;
        }
      }
    );
    this.setState({categories: newArray });
    //console.log(this.state.categories[index+1][1]);
  }
  onClick(index) {
    //console.log(this.refs[index]);
      this.setState({
          sliderShow: !this.state.showSlider,
      });
    /* $(this.refs[index]).toggle(this.state.showSlider)*/
  }
  componentDidMount() {
      this.ref = base.syncState(`${localStorage.UID}/myExpenses`, {
        context: this,
        state: 'categories',
        asArray: true
      })
      // base.update(`${localStorage.UID}/myExpenses`, {
      //   data: this.state.categories
      // });
   }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  render () {
    const styles = {
        container: {
            position: "relative",
            background: "#3084CA",
            color: "#276FA0",
            width: "300px",
            height: "100px",
            borderRadius: "5px"
        },
        title: {
            fontFamily: "Oswald",
            fontSize: "24px",
            margin: "10px"
        },
        price: {
            fontFamily: "Abril Fatface",
            position: "absolute",
            top: "25px",
            fontSize: "48px"
        },
        icon: {
            color: "#276FA0",
            position: "absolute",
            top: "-68px",
            right: "0",
            fontWeight: "900px",
            fontSize: "78px"
        },
    }
    let display = this.state.categories.slice(1, this.state.categories.length).map((expense, index) => {
      if (expense[0] === 'Housing') {
        return (<div className="expenses" key={index} ref={index}>
                  <div style={styles.container} onClick={this.onClick.bind(this, index)}>
                    <p style={styles.title}>{expense[0]}</p>
                    <label style={styles.price}>${expense[1]}</label>
                    <i className="glyphicon glyphicon-tasks" style={styles.icon}></i>


                  </div>
                  {this.state.sliderShow
                    ? <input id="categories" type='range' min={0} max={2000} step={5} value={expense[1]} onChange={this.handleChange.bind(this, expense, index)}/>
                      : null}
                </div>)
      }else {
        return (
                <div className="expenses" key={index} ref={index}>
                  <div style={styles.container} onClick={this.onClick.bind(this, index)}>
                    <p style={styles.title}>{expense[0]}</p>
                    <label style={styles.price}>${expense[1]}</label>
                    <i className="glyphicon glyphicon-tasks" style={styles.icon}></i>


                  </div>
                  {this.state.sliderShow
                    ? <input id="categories" type='range' min={0} max={1000} step={5} value={expense[1]} onChange={this.handleChange.bind(this, expense, index)}/>
                      : null}
                </div>
          )}
    })
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default ExpenseCategories;
