import React, { Component } from "react";
import { NavLink } from "react-router-dom";



export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Welcome</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul className="navbar-nav">
                                {!this.props.isLoggedIn?(
                           <li><NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink></li> 
                           ):(""
                           )}

                           {this.props.isLoggedIn?(
                           <li><NavLink to="/productlist" className="nav-link active" aria-current="page" >ProductList</NavLink>
                            </li> 
                            ):(""
                             )}

                            {this.props.isLoggedIn?(
                            <li><NavLink to="/customerlist" className="nav-link active" aria-current="page" >CustomerList</NavLink></li>
                            ):(""
                             )}

                            {this.props.isLoggedIn?(
                            <li><NavLink to="/dashboard" className="nav-link active" aria-current="page" >dashboard</NavLink></li>
                            ):(""
                            )}
                            {this.props.isLoggedIn?(
                            <li> <NavLink to="/logout"  onClick={this.props.isLoggedIn} className="nav-link active" aria-current="page" >Logout</NavLink></li>
                            ):(""
                            )}
                            
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}