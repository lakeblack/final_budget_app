import React, { Component } from 'react';
import Graph from '../components/Graph';
import Nav from './Nav'
import HomeContainer from '../containers/HomeContainer'

class Home extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <HomeContainer/>
        <Graph/>
      </div>
    )
  }
}

export default Home;
