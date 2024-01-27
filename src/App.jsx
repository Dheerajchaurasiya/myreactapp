import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import LoginForm from './LoginForm';
import Customer from './Customer';
import DashBoard from './DashBoard';
import NewCustomer from './NewCustomer';
import UpdateCustomer from './UpdateCustomer';
import Pagenotfound from './Pagenotfound';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        
        return (
            <BrowserRouter>
                <Navbar isLoggedIn={this.state.isLoggedIn} isLoggedout={this.state.isLoggedout}></Navbar>
            <Routes>
                  <Route path="/" exact element={<LoginForm loginStatus={this.loginStatus}/>}></Route>

                {/* <Route path="/" exact element={<LoginForm/>}></Route> */}
                <Route path="/productlist" exact element={<ProductList/>}></Route>
                <Route path="/customerlist" exact element={<Customer/>}></Route>
                <Route path="/dashboard" exact elemment={<DashBoard/>}></Route>
                <Route path="/customers" exact element={<NewCustomer/>}></Route>
                <Route path="/*" exact element={<Pagenotfound/>}></Route>

               <Route path="/updatecustomer/:id" exact element={<UpdateCustomer/>}></Route>

            </Routes>
            </BrowserRouter>

            
        );
    }
    loginStatus =()=>{
        this.setState({isLoggedIn: true});
    };
    loginStatus=()=>{
        this.setState({isLoggedIn:false});
    };
}