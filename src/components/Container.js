import React, { Component } from 'react';
import './Container.css'
import Product from './Products/Product';
import data from '../data.json';
import Filter from "./Filter/Filter";
import Cart from './Cart/Cart';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.products,
            sort: "",
            size: "",
            count: "",
            cartItems: [],
        }
    }

    sortProducts = (event) => {
        // alert(event.target.value);
        const sort = event.target.value;
        this.setState(
            {
                sort: sort,
                products: data.products.sort((a, b) => {
                    // alert(a.price);
                    // alert(b.price);
                    if (sort === "lowest") {
                        return a.price - b.price;
                    }
                    else {
                        return b.price - a.price;
                    }
                })
            }
        )

    }
    filterProducts = (event) => {
        if (event.target.value === "") {
            this.setState({
                size: event.target.value,
                products: data.products
            })
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter((product) => (
                    product.availableSizes.indexOf(event.target.value) >= 0

                ))
            })
        }
    }

    addToCart = (prod) => {
        const cartItems = this.state.cartItems;
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item._id === prod._id) {
                item.count++;
                alreadyInCart = true;

            }

        });
        if (alreadyInCart === false) {
            cartItems.push({ ...prod, count: 1 })
        }
        this.setState({ cartItems: cartItems });
        console.log(this.state.cartItems);
    }

    // let count = {this.state.products.length}

    render() {

        return (
            <div className="grid-container">
                <div className="header">
                    My Shopping Cart
                </div>
                <div className="main">
                    <div className="mainContent">
                        <Filter sortProducts={this.sortProducts} count={this.state.products.length}
                            filterProducts={this.filterProducts}></Filter>
                        <Product products={this.state.products} addToCart={this.addToCart} />
                    </div>
                    <div className="sideBar">
                        <Cart cartItems={this.state.cartItems}
                            Proceed={this.state.Proceed}
                            Payment={this.state.Payment} />
                    </div>
                </div>
                <div className="footer">
                    ALL RIGHTS RESERVED
                </div>

            </div>
        );
    }
}

export default Container;


