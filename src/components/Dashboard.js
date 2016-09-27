import React, {Component} from 'react';
import {Link} from 'react-router'
import base from '../config/base'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="col-sm-2 col-md-1 sidebar">
                        <ul className="nav nav-sidebar">
                            <li>
                              <Link to={`/home/${localStorage.UID}`}>
                                <i className="glyphicon glyphicon-user"></i>

                              </Link>
                            </li>
                            <li>
                              <Link to={`/loan/${localStorage.UID}`}>
                                <i className="glyphicon glyphicon-credit-card"></i>

                              </Link>
                            </li>
                            <li>
                              <Link to={`/goals/${localStorage.UID}`}>

                                <i className="glyphicon glyphicon-piggy-bank"></i>
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
