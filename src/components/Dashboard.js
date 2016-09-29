import React, {Component} from 'react';
import {Link} from 'react-router'
import base from '../config/base'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="col-sm-2 col-md-1 sidebar">
                        <ul className="nav nav-sidebar">
                            <li>
                              <Link to={`/home/${localStorage.UID}`}>
                                <i className="glyphicon glyphicon-dashboard"></i>

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
                            <li>
                              <Link to="/">

                                <i className="glyphicon glyphicon-log-out"></i>
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
