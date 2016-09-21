import React, { Component } from 'react';
import Graph from '../components/Graph';
import Nav from './Nav'
import HomeContainer from '../containers/HomeContainer'
import Dashboard from './Dashboard'
import Nouislider from 'react-nouislider';

class Home extends Component{
  render(){
    return(
      <div>
        <Dashboard />
        <Nouislider
          range={{min: 0, max: 200}}
          start={[0, 100]}
          tooltips
          />

      </div>
    )
  }
}


export default Home;
