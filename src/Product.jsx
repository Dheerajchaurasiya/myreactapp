import React, { Component } from "react";
import "./index.css";

export default class Product extends Component {
    state = {
        product: this.props.product
    }
    render() {
        return (

            <div>
                <div className="container text-center ">
                    <div className="col pt-5">
                        <div className="card mystyle shadow p-3 mb-5 bg-body-tertiary rounded-5 border-0">
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn-close" onClick={()=>{this.props.onDelete(this.state.product)}} aria-label="Close"></button>
                        </div>
                            <img src={this.props.product.Image} class="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.product.pname}</h5>
                                <p className="card-text">Price: {this.props.product.price}</p>
                                <button className="btn btn-success" onClick={() => { this.props.onDecrement(this.state.product, 0); }}>-</button>
                                {this.state.product.quantity}
                                <button className="btn btn-success" onClick={() => { this.props.onIncrement(this.state.product, 10); }}>+</button>
                                <div className="pt-2">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}