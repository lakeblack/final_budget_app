import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import Home from '../components/Home';
import Login from '../components/Login';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Login} />
      <Route path="/home/(:userUID)" component={Home}/>
    </Route>
  </Router>
)
export default router;
