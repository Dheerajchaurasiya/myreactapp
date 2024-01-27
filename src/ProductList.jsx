import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
    state = {
        title: "Product List",
        products: [

        ],
    }
    render() {
        return (
            <div className="container-fluid text-center">
                <h2>{this.state.title}</h2>
                <div className="row row-cols-3">

                    {
                        this.state.products.map((prod) => {
                            return (
                                <Product
                                    key={prod.id}
                                    product={prod}
                                    onIncrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}
                                    onDelete={this.handleDelete}
                                >
                                    <button className="btn btn-success">Payment</button>
                                </Product>
                            )
                        })}
                </div>
            </div>
        );

    }
    componentDidMount = async () => {
        let response = await fetch("http://localhost:4000/products", {
            method: "GET",
        });
        let body = await response.json();
        this.setState({ products: body });
    };

    handleIncrement = (product, maxValue) => {
        //get index of selected course
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity < maxValue) {
            allProducts[index].quantity++;
            //update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    };
    handleDecrement = (product, minValue) => {
        //get index of selected course
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity > minValue) {
            allProducts[index].quantity--;
            //update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    };
    handleDelete = (product) => {
        //get index of selected course
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (window.confirm("Are you sure to delete?")) {
            //delete course based on index
            allProducts.splice(index, 1);
            //update the state of current component (parent component)
            this.setState({ products: allProducts });
        }
    };

}    