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
                fontFamily: "Oswald",
                height: "100px",
                textAlign: "center",
                backgroundColor: "rgba(52, 50, 67, 0.6)",
                color: "rgba(237, 234, 227, 0.6)",
                margin: "20px",
                display: "inline-flex",
                padding: "0",
                minWidth: "280px",
            },
            container: {
                display: "inline-flex",
                position: "absolute",
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
                color: "#e9d78e",
                display: "inline-block",
                fontSize: "42px",
            },
            label3: {
                color: "#9abf88",
                display: "inline-block",
                fontSize: "42px",
            },
            label3b: {
                color: "#c94a53",
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
              background: "#e9d78e",
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
            },
            icon3b:{
              fontSize: "48px",
              background: "#c94a53",
              textAlign: "center",
              position:"relative",
              height: "100px",
              width: "100px",
              top: "-0.5px"
            }
        }
        return (
          <div className="row">

            <div className="col-sm-12 totals" style={styles.container}>
              <div style={styles.total} className="col-sm-3 col-sm-offset-3">
                <i className="glyphicon glyphicon-usd" style={styles.icon1}></i>
                <p style={styles.title}>
                  Income<br/>
                <span style={styles.label1}>
                  { " $" + this.state.income}
                </span>
              </p>
            </div>
            <div style={styles.total} className="col-sm-3 col-sm-offset-3">
              <i className="glyphicon glyphicon-stats" style={styles.icon2}></i>
              <p style={styles.title}>
                Total Expenses<br/>
              <span style={styles.label2}>
                {" $" + runningTotalExpenses}
              </span>
            </p>
          </div>
          <div style={styles.total} className="col-sm-3 col-sm-offset-3">
            {surplus < 0 ? <i className="glyphicon glyphicon-thumbs-down" style={styles.icon3b}></i> :
            <i className="glyphicon glyphicon-thumbs-up" style={styles.icon3}></i>}
              <p style={styles.title}>
                Surplus<br/>

              {surplus < 0 ? <span style={styles.label3b}>{" $"+ surplus}</span> :
              <span style={styles.label3}>{" $"+ surplus}</span>}

              </p>
            </div>

          </div>
          </div>

        )
    }
}

export default TotalExpenses;
