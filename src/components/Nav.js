import React, {Component} from 'react';
import {Link} from 'react-router'

class Nav extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                      Budget App
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Nav;
