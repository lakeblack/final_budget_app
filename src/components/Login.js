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
       console.log(authData.uid);
       base.update(`${authData.uid}/myExpenses`, {
         data: {0: {0:'Expense', 1:'Cost'},
                1: {0:'Food', 1:0},
                2: {0:'Fun', 1:0},
                3: {0:'Housing', 1:0},
                4: {0:'Loans', 1:0},
                5: {0:'Miscellaneous', 1:0},
                6: {0:'Transportation', 1:0},
                7: {0:'Utilities', 1:0}}
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
