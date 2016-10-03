import React, {Component} from 'react';
import {Link} from 'react-router'

class Dashboard extends Component {
    render() {
      let styles={
        title:{
          position: "relative",
          color: "rgba(237, 234, 227, 0.6)",
          fontSize: "18px",
          fontFamily: "Oswald",
        }
      }
        return (
            <div>
                <div className="container-fluid hidden-xs">
                    <div className="col-sm-2 col-md-1 sidebar">
                        <ul className="nav nav-sidebar">
                            <li>
                              <Link to={`/home/${localStorage.UID}`}>
                                <i className="glyphicon glyphicon-dashboard"></i>
                                <p style={styles.title}>Home</p>
                              </Link>
                            </li>
                            <li>
                              <Link to={`/loan/${localStorage.UID}`}>
                                <i className="glyphicon glyphicon-credit-card"></i>
                                  <p style={styles.title}>Loans</p>
                              </Link>
                            </li >
                            <li>
                              <Link to={`/goals/${localStorage.UID}`}>

                                <i className="glyphicon glyphicon-piggy-bank"></i>
                                  <p style={styles.title}>Goals</p>


                              </Link>
                            </li>
                            <li>
                              <Link to="/">

                                <i className="glyphicon glyphicon-log-out"></i>
                                  <p style={styles.title}>Logout</p>

                              </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}

export default Dashboard;
