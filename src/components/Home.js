import React, { Component } from 'react';
import Graph from '../components/Graph';
import Nav from './Nav'
import HomeContainer from '../containers/HomeContainer'
import Dashboard from './Dashboard'

class Home extends Component{
  render(){
    return(
      <div>
        <Dashboard />

      </div>
    )
  }
}

export default Home;
