import React, {Component} from 'react'
import base from '../config/base'

class TotalExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myExpenses: [
                [
                    'Expense Category', 'Monthly Cost'
                ],
                ['placeholder', 0]
            ],
            income: 2500
        }
    }
    componentDidMount() {
        this.ref = base.syncState(`${localStorage.UID}/myExpenses`, {
            context: this,
            state: 'myExpenses',
            asArray: true
        });
        this.ref2 = base.syncState(`${localStorage.UID}/Income`, {
            context: this,
            state: 'income'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
        base.removeBinding(this.ref2);
    }
    render() {
        let runningTotalExpenses = this.state.myExpenses.slice(1, this.state.myExpenses.length).map(expense => expense[1]).reduce((total, current) => total + current);
        let surplus = this.state.income - runningTotalExpenses;
        var styles = {
            total: {
                fontWeight: "bold",
                fontFamily: "Yatra One",
                height: "100px",
                textAlign: "center",
                backgroundColor: "#343243",
                color: "#EDEAE3",
                margin: "10px",
                display: "inline-flex",
                width: "250px",


            },
            container: {
                display: "inline-flex",
                position: "absolute",
                backgroundColor: "transparent",
            },
            title: {
              margin: "15px",
            },
            label1: {
                color: "#7fb4c7",
                display: "inline-block",
                fontSize: "42px",
            },
            label2: {
                color: "#c94a53",
                display: "inline-block",
                fontSize: "42px",
            },
            label3: {
                color: "#9abf88",
                display: "inline-block",
                fontSize: "42px",
            },
            icon1:{
              fontSize: "48px",
              background: "#7fb4c7",
              textAlign: "center",
              position:"relative",
              height: "100px",
              width: "100px",
              top: "-0.5px"
            },
            icon2:{
              fontSize: "48px",
              background: "#c94a53",
              textAlign: "center",
              position:"relative",
              height: "100px",
              width: "100px",
              top: "-0.5px"
            },
            icon3:{
              fontSize: "48px",
              background: "#9abf88",
              textAlign: "center",
              position:"relative",
              height: "100px",
              width: "100px",
              top: "-0.5px"
            }
        }
        return (
            <div className="col-sm-9 col-sm-offset-2 col-xs-offset-4" style={styles.container}>
                <div style={styles.total}>
                  <i className="glyphicon glyphicon-usd" style={styles.icon1}></i>
                    <p style={styles.title}>
                        Income<br/>
                      <span style={styles.label1}>
                          { " $" + this.state.income}
                        </span>
                    </p>
                </div>
                <div style={styles.total}>
                  <i className="glyphicon glyphicon-stats" style={styles.icon2}></i>
                  <p style={styles.title}>
                    Total Expenses<br/>
                  <span style={styles.label2}>
                    {" $" + runningTotalExpenses}
                  </span>
                  </p>
                </div>
                <div style={styles.total}>
                  <i className="glyphicon glyphicon-thumbs-up" style={styles.icon3}></i>
                  <p style={styles.title}>
                    Surplus<br/>
                  <span style={styles.label3}>
                    {surplus < 0
                      ? alert(" You don't make enough, Ass Hole!")
                      : " $" + surplus}
                    </span>
                  </p>
                </div>

            </div>

        )
    }
}

export default TotalExpenses;
