import React, { Component } from 'react';
// import CustomizedSnackbars from './CustomizedSnackbars';
import Login     from './login'
class Form extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            name :"",
            age :"",
            email:"",
            password:"",
            valid : false
        }
    }

    
    changeValid()
    {
        this.setState({
            name : document.getElementById("name").value,
            age:document.getElementById("age").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            valid:true
        })
    }

    render()
    {
        return this.state.valid ?
        (
            <Login />
        ) :
        (
            <div className="container w-50 mt-5">
                <div className="card-title text-secondary text-uppercase font-weight-bold">Registration Form</div>
                <div className="form-group"> 
                    <input id="name" type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input id="age" type="number" className="form-control" placeholder="Age" min="1" />
                </div>
                <div className="form-group">
                    <input id="email" type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input id="password" type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <button type="button" onClick={() => this.changeValid()} className="btn btn-block btn-dark">Register</button>
                </div>
            </div>
        )
        ;
    }
}

export default Form