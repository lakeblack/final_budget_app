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
       base.update(`${authData.uid}`, {
         data: {'Income': 5000}
       });
       base.update(`${authData.uid}/myExpenses`, {
         data: {0: {0:'Expense Category', 1:'Monthly Cost'},
                1: {0:'Food', 1:0},
                2: {0:'Fun', 1:0},
                3: {0:'Housing', 1:0},
                4: {0:'Loans', 1:0},
                5: {0:'Miscellaneous', 1:0},
                6: {0:'Transportation', 1:0},
                7: {0:'Utilities', 1:0}}
       });
       base.update(`${authData.uid}/myFood`, {
         data: {0: {'name':'Groceries', 'value':0},
                1: {'name':'Going Out', 'value':0}}
       });
       base.update(`${authData.uid}/myFun`, {
         data: {0: {'name':'Hobbies', 'value':0},
                1: {'name':'Entertainment', 'value':0}}
       });
       base.update(`${authData.uid}/myHousing`, {
         data: {0: {'name':'Rent', 'value':0},
                1: {'name':'Mortgage', 'value':0},
                2: {'name':'Renovation and Maintenance', 'value':0}}
       });
       base.update(`${authData.uid}/myLoans`, {
         data: {0: {'interestTotal':0, 'monthlyPayment':0, 'months':1, 'principal': 0, 'rate': 0.1, 'type': 'Auto'},
                1: {'interestTotal':0, 'monthlyPayment':0, 'months':1, 'principal': 0, 'rate': 0.1, 'type': 'Student'},
                2: {'interestTotal':0, 'monthlyPayment':0, 'months':1, 'principal': 0, 'rate': 0.1, 'type': 'Personal'},
                3: {'interestTotal':0, 'monthlyPayment':0, 'months':1, 'principal': 0, 'rate': 0.1, 'type': 'Miscellaneous'}}
       });
       base.update(`${authData.uid}/myMiscellaneous`, {
         data: {0: {'name':'Family', 'value':0},
                1: {'name':'Clothes', 'value':0},
                2: {'name':'Personal Amentities', 'value':0},
                3: {'name':'Health and Fitness', 'value':0}}
       });
       base.update(`${authData.uid}/myTransportation`, {
         data: {0: {'name':'Gas', 'value':0},
                1: {'name':'Insurance', 'value':0},
                2: {'name':'Public', 'value':0}}
       });
       base.update(`${authData.uid}/myUtilities`, {
         data: {0: {'name':'Phone', 'value':0},
                1: {'name':'Cable and Internet', 'value':0},
                2: {'name':'Electric', 'value':0},
                3: {'name':'Water and Trash', 'value':0},
                4: {'name':'Gas', 'value':0}}
       });
     });
   }


  render() {
    return (
      <div className="loginPage">
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
