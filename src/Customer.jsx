import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Customer extends Component {
    state = {
        title: "Customers List",
        customers: [
        ],
    }
    render() {
        return (
            <div class=" border-top p-2">

                <NavLink to="/customers" className="nav-link active badge bg-primary text-wrap fs-4" aria-current="page" onClick={this.onSaveClick} > Add New Customer</NavLink>
                <div>
                    <h2>{this.state.title}</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">Image</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map((cust) => {
                                return (
                                    <tr key={cust.id}>
                                        <td>{cust.id}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.phone}</td>
                                        <td>{cust.email}</td>
                                        <td>{cust.city}</td>
                                        <td><img src={cust.Image} alt="" /></td>
                                        <td> <NavLink to={`/updatecustomer/${cust.id}`} className="nav-link active badge bg-primary text-wrap fs-4 me-auto p-2" aria-current="page" onClick={this.onSaveClick} >Update</NavLink></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    componentDidMount = async () => {
        let response = await fetch("http://localhost:4000/customers", {
            method: "GET",
        });
        let body = await response.json();
        this.setState({ customers: body });
    }
}