import React, { Component } from 'react';
import {Link} from 'react-router'
import HomeContainer from '../containers/HomeContainer'
import Graph from './Graph'
import Expenses from './Expenses'

class Dashboard extends Component{
  render(){
    return(
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
       <div className="row">
         <div className="col-sm-2 col-md-1 sidebar">
           <ul className="nav nav-sidebar">
             <li><i className="glyphicon glyphicon-user"></i></li>
             <li><i className="glyphicon glyphicon-usd"></i></li>
             <li><i className="glyphicon glyphicon-credit-card"></i></li>
             <li><i className="glyphicon glyphicon-piggy-bank"></i></li>
             <li><i className="glyphicon glyphicon-calendar"></i></li>
           </ul>
         </div>
         <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
           <Graph/>
           <Expenses />
         </div>
       </div>
     </div>

     </div>

    )
  }
}

export default Dashboard;
