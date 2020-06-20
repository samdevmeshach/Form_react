import React, { Component } from 'react';
 
class Login extends Component
{
    validate()
    {
        if(document.getElementById("username").value === this.state.name && document.getElementById("pass").value ===this.state.password)
            alert("success");
        else
            alert("wrong")
    }
    render()
    {
        return(
            <div className="container w-50 mt-5">
                <div className="card-title text-secondary">Login Form</div>
                <div className="form-group"> 
                    <input id="username" type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input id="pass" type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={() => this.validate()} className="btn btn-block btn-dark">Login</button>
                </div>
            </div>
        );
    }
}

export default Login