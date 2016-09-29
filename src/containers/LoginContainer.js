import React from 'react';

function LoginContainer(props) {
    return (
        <div className="loginPage col-sm-12">
            <div className="middlePage">
              {props.login
                ? <h1>Budgetify</h1>
              : null}
                <div className="panel panel-info">
                    <div className="panel-body">
                        <div className="row">

                                <form className="form-horizontal login" onSubmit={props.handleSubmit}>

                                        <input type="text" placeholder="Enter User Name" className="form-control input-md"/>
                                        <input type="password" placeholder="Enter Password" className="form-control input-md"/>
                                        <button onClick={props.toggleLogin} className="btn btn-sm">Sign Up</button>
                                        <button className="btn btn-sm ">Sign In</button>

                                </form>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default LoginContainer;
