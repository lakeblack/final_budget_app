import React, {Component} from 'react';
import {Link} from 'react-router'

class Nav extends Component {
    render() {
      let styles={
        title:{
          color: "rgba(237, 234, 227, 0.7)",
          fontSize: "18px",
          fontFamily: "Oswald",
        },
        navbar:{
          display: "inline-flex",
          width: "100%",
        },
        container: {
          width: "100%",
        }
      }
        return (
          <nav style={styles.container} className="navbar navbar-default visable-xs">
            <div className="container-fluid visable-xs">
              <div className="navbar-header visable-xs">
                <ul style={styles.navbar} className="nav navbar-left visable-xs">
                  <li  className="hidden-sm">
                    <Link to={`/home/${localStorage.UID}`}>
                      <i className="glyphicon glyphicon-dashboard "></i>
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
          </nav>

        )
    }
}

export default Nav;
