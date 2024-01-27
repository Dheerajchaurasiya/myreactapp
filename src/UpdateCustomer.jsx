import React, { Component } from 'react';
import withRouter from './withRouter';


class UpdateCustomer extends Component {
    constructor(props){
        super(props);

        this.state = {id:"",name:"",email:"",password:"",phone:"",city:"",Image:""}
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <form>
                        <h4 className="p-2 border-bottom">Updating Customer Details</h4>

                        <div className="form-group form-row">
                            <label className="col-lg-4">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.name} 
                                onChange={(event)=>{
                                    this.setState({name:event.target.value});
                                }} 
                                />
                        </div>

                        <div className="form-group form-row">
                            <label className="col-lg-4">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.email} 
                                onChange={(event)=>{
                                    this.setState({email:event.target.value});
                                }} />
                        </div>

                        <div className="form-group form-row">
                            <label className="col-lg-4">password</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.password} 
                                onChange={(event)=>{
                                    this.setState({password:event.target.value});
                                }} />
                        </div>

                        <div className="form-group form-row">
                            <label className="col-lg-4">Phone</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.phone} 
                                onChange={(event)=>{
                                    this.setState({phone:event.target.value});
                                }} />
                        </div>

                        <div className="form-group form-row">
                            <label className="col-lg-4">City</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.city} 
                                onChange={(event)=>{
                                    this.setState({city:event.target.value});
                                }} />
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4">Image</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.Image} 
                                onChange={(event)=>{
                                    this.setState({Image:event.target.value});
                                }} />
                        </div>

                        <div className="border-top p-2">
                            <button className="btn btn-success" onClick={this.onUpdateClick}>
                                UPDATE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    componentDidMount = async() => {
        let id = this.props.params.id;
        console.log(id);
        let response = await fetch(`http://localhost:4000/customers/${id}` , {method:"GET"});
        let body = await response.json();

        console.log(body);
        this.setState({
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
            city: body.city,
            Image: body.Image,
        });

    }

    onUpdateClick = async(event) =>{
        event.preventDefault();
        let id = this.props.params.id;

        var customer = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            city: this.state.city,
            Image: this.state.Image
        } ;

        var response = await fetch(`http://localhost:4000/customers/${id}`,{
            method: "PUT",
            body: JSON.stringify(customer),
            headers: {
                "content-type": "application/json"
            }
        });

        var body = await response.json();
        console.log(body);
    }
}

export default withRouter(UpdateCustomer);