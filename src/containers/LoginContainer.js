import React from 'react';

function LoginContainer (props){
  return (
    <div className="middlePage">
        {props.login ? <h2>Budget App</h2> : null}
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">Please Sign In</h3>
      </div>
      <div className="panel-body">
      <div className="row">
    <div className="col-md-5" >
    <button className="btn btn-danger log">Log in with FaceBook</button>
    <button className="btn btn-primary log">Log in with Github</button>
    <button className="btn btn-success log">Log in with Twitter</button>
    </div>
        <div className="col-md-7" style={{borderLeft:"1px solid #ccc", height:"160px"}}>
    <form className="form-horizontal" onSubmit={props.handleSubmit}>
    <fieldset>

      <input id="textinput" name="textinput" type="text" placeholder="Enter User Name" className="form-control input-md"/>
      <input id="textinput" name="textinput" type="password" placeholder="Enter Password" className="form-control input-md"/>
      <button id="singlebutton" name="singlebutton" className="btn btn-info btn-sm pull-right">Sign In</button>
      <button onClick={props.toggleLogin} className="btn btn-success btn-sm pull-left">Sign Up</button>


    </fieldset>
    </form>
    </div>

    </div>

    </div>
    </div>

    </div>
  )

}


export default LoginContainer;
