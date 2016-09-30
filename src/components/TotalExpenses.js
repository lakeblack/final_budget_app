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
            income: 0
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
            income: {
                fontWeight: "bold",
                height: "100%",
                textAlign: "center",
                backgroundColor: "#343243",
                color: "#EDEAE3",
                borderRadius: "5px",
                margin: "10px",
                display: "inline-flex",
                width: "250px",


            },
            expenses: {
                fontWeight: "bold",
                height: "100%",
                textAlign: "center",
                backgroundColor: "#343243",
                color: "#EDEAE3",
                borderRadius: "5px",
                margin: "10px",
                display: "inline-flex",
                width: "250px",


            },
            surplus: {
                fontWeight: "bold",
                height: "100%",
                textAlign: "center",
                backgroundColor: "#343243",
                color: "#EDEAE3",
                borderRadius: "5px",
                margin: "10px",
                display: "inline-flex",
                width: "250px",

            },
            container: {
                display: "inline-flex",
                position: "absolute",
                backgroundColor: "transparent",
                borderRadius: "5px",
            },
            title: {
              margin: "15px",
            },
            label: {
                color: "#FCC0A1",
                display: "inline-block",
            },
            icon:{
              fontSize: "48px",
              background: "#FCC0A1",
              textAlign: "center",
            }
        }
        return (
            <div className="col-sm-9 col-sm-offset-1 col-xs-offset-4" style={styles.container}>
                <div style={styles.income} className="total">
                  <i className="glyphicon glyphicon-usd" style={styles.icon}></i>
                    <p style={styles.title}>
                        Income<br/>
                        <span style={styles.label}>
                          { " $" + this.state.income}
                        </span>
                    </p>
                </div>
                <div style={styles.expenses} className="total">
                  <i className="glyphicon glyphicon-stats" style={styles.icon}></i>
                  <p style={styles.title}>
                    Total Expenses<br/>
                  <span style={styles.label}>
                    {" $" + runningTotalExpenses}
                  </span>
                  </p>
                </div>
                <div style={styles.surplus} className="total">
                  <i className="glyphicon glyphicon-thumbs-up" style={styles.icon}></i>
                  <p style={styles.title}>
                    Surplus<br/>
                  <span style={styles.label}>
                    {surplus < 0
                      ? " You don't make enough, Ass Hole!"
                      : " $" + surplus}
                    </span>
                  </p>
                </div>

            </div>

        )
    }
}

export default TotalExpenses;
