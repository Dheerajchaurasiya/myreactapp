import React, { Component } from "react";

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {id:"",name:"",phone:"",city:"",Image:"",email:"",password:""};
  }
  render() { 
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h4 class="p-2 border-bottom">New Customer</h4>
           
            <div class="form-group form-row">
              <label className="col-lg-4">Customer Name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div class="form-group form-row">
              <label className="col-lg-4">Phone</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            
            <div class="form-group form-row">
              <label className="col-lg-4">City</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            
            <div class="form-group form-row">
              <label className="col-lg-4">Image</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.Image}
                  onChange={(event) => {
                    this.setState({ Image: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div class="form-group form-row">
              <label className="col-lg-4">Email</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div class="form-group form-row">
              <label className="col-lg-4">Password</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div class=" border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      
    );
  }
  onSaveClick = async (event) => {
    event.preventDefault();
    var customer = {
      name: this.state.name,
      city: this.state.city ,
      phone: this.state.phone,
      Image: this.state.Image,
    };
    var response = await fetch("http://localhost:4000/customers", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-type": "application/json",
      },
    });
    var body = await response.json();
    console.log(body);
    //after receiving response body, redirect to /customers
    if (body) {
      this.props.history.replace("/customers");
    }
  };
}
export default NewCustomer;