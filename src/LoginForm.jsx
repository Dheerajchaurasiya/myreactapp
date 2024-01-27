import React, { Component } from "react";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", message: "" };
    }
    render() {
        return (
            <div className="container col-6 pt-5">
                <div className="row shadow ">
            <div className="col">
            <h4 className="m-1 p-2 border-bottom">Login</h4>
            <div className="form-group form-row">
                <label className="col-lg-4">Email:</label>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={(event) => {
                        this.setState({ email: event.target.value });
                    }}
                />
            </div>
            <div className="form-group form-row">
                <label className="col-lg-4">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={(event) => {
                        this.setState({ password: event.target.value });
                    }}/>
            </div>

            <div className="text-right">
                {this.state.message}
                <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
                    Login
                </button>
            </div>
        </div>
        </div>
        </div>
    );
} 
    // end of render
    onLoginClick = async () => {
        console.log(this.state);
        var response = await fetch(`http://localhost:4000/customers?email=${this.state.email}&password=${this.state.password}`,
            { method: "GET" }
        );
        var body = await response.json();
        console.log(body);
        if (body.length > 0) {
            this.setState({
                message: <span classNameName="text-success">Successfully Logged-in</span>,
            });
            this.props.loginStatus();
        } else {
            this.setState({
                message: (
                    <span classNameName="text-danger">Invalid login, please try again</span>
                ),
            });
        }
    }
}