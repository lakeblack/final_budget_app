import React, { Component, PropTypes } from 'react';
import LoginContainer from '../containers/LoginContainer';
import base from '../config/base'


class Login extends Component {
  constructor() {
    super();
    this.state = {login: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = event.target.elements[1].value;
    let password = event.target.elements[2].value;
    if (this.state.login) {
      base.authWithPassword({email, password}, this.authHandler);
    } else {
      this.createUser(email, password);
    }
  }

  authHandler(error, authData) {
    if(error){
      console.log(error);
    } else {
      localStorage.setItem('UID', authData.uid);
      //change route to /home
      this.context.router.push(`/home/${authData.uid}`);
      //console.log(authData);
    }
  }

  toggleLogin() {
    this.setState({login: !this.state.login});
  }

  createUser(email, password) {
     base.createUser({email, password}, function(error, authData) {
       console.log(authData);
       base.update(`${authData.uid}/myExpenses`, {
         data: {0: {0:'Expense', 1:'Cost'}}
       });
       base.update(`${authData.uid}/myExpenses/Food`, {
         data: {0: 'Food', 1: 0}
       });
       base.update(`${authData.uid}/myExpenses/Fun`, {
         data: {0: 'Fun', 1: 0}
       });
       base.update(`${authData.uid}/myExpenses/Housing`, {
         data: {0: 'Housing', 1: 0}
       });
       base.update(`${authData.uid}/myExpenses/Loans`, {
         data: {0: 'Loans', 1: 0}
       });
       base.update(`${authData.uid}/myExpenses/Miscellaneous`, {
         data: {0: 'Miscellaneous', 1: 0}
       });
       base.update(`${authData.uid}/myExpenses/Transportation`, {
         data: {0: 'Transportation', 1: 0}
       });
       base.update(`${authData.uid}/myExpenses/Utilities`, {
         data: {0: 'Utilities', 1: 0}
       });
     });
   }


  render() {
    return (
      <div className="container">
        <LoginContainer
          handleSubmit={this.handleSubmit}
          login={this.state.login}
          toggleLogin={this.toggleLogin.bind(this)}
          />
        {this.props.children}
      </div>
    );
  }
}

Login.contextTypes = {router: PropTypes.object.isRequired};

export default Login;
