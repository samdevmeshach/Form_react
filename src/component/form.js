import React, { Component } from 'react';

class Form extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            valid : false
        }
    }

    changeValid()
    {
        this.setState({
            valid:false
        })
    }

    render()
    {
        return this.state.valid ?
        (
            <div className="container w-50 mt-5">
                <div className="card-title text-secondary">Login Form</div>
                <div className="form-group"> 
                <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                <button type="button" onClick={() => this.changeValid()} className="btn btn-block btn-dark">Login</button>
                </div>
            </div>
        ) :
        (
            <div className="container w-50 mt-5">
                <div className="card-title text-secondary">Registration Form</div>
                <div className="form-group"> 
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="date" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-block btn-dark">Register</button>
                </div>
            </div>
        )
        ;
    }
}

export default Form