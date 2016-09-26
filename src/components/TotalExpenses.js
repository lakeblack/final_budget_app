import React, {Component} from 'react'
import base from '../config/base'

class TotalExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myExpenses: [
                ['Expense Category', 'Monthly Cost'],
                ['placeholder', 0]
            ],
            income: 0
        }
    }
    componentDidMount() {
        this.rebaseRef = base.syncState(`${localStorage.UID}/myExpenses`, {
            context: this,
            state: 'myExpenses',
            asArray: true
        });
        this.rebaseRef = base.syncState(`${localStorage.UID}/Income`, {
            context: this,
            state: 'income'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.rebaseRef);
    }
    render() {
        let runningTotalExpenses = this.state.myExpenses.slice(1, this.state.myExpenses.length).map(expense => expense[1]).reduce((total, current) => total + current);
        let surplus = this.state.income - runningTotalExpenses;
        var styles = {
            income: {
                flexGrow: 1,
                fontWeight: "bold",
                height: "100%",
                textAlign: "center",
                backgroundColor: "#3084CA",
                color: "EDEAE3",
                borderRadius: "5px",
                margin: "10px"
            },
            expenses: {
                flexGrow: 1,
                fontWeight: "bold",
                height: "100%",
                textAlign: "center",
                backgroundColor: "#F15458",
                color: "EDEAE3",
                borderRadius: "5px",
                margin: "10px"
            },
            surplus: {
                flexGrow: 1,
                fontWeight: "bold",
                height: "100%",
                textAlign: "center",
                backgroundColor: "#398E5F",
                color: "EDEAE3",
                borderRadius: "5px",
                margin: "10px"
            },
            footer: {
                display: "inline-flex",
                position: "absolute",
                bottom: "-100px",
                left: "-100px",
                height: "60px",
                backgroundColor: "transparent",
                borderRadius: "5px"
            }
        }
        return (
            <footer className="col-sm-9 col-sm-offset-1 col-xs-offset-4" style={styles.footer}>
                <p style={styles.income}>Income:
                    <span>
                        { " $" + this.state.income}
                    </span>
                </p>
                <p style={styles.expenses}>Total Expenses:
                    <span>
                        { " $" + runningTotalExpenses}
                    </span>
                </p>
                <p style={styles.surplus}>Surplus:
                    <span>
                        {surplus < 0
                            ? " You don't make enough, Ass Hole!"
                            : " $" + surplus}
                    </span>
                </p>

            </footer>

        )
    }
}

export default TotalExpenses;
