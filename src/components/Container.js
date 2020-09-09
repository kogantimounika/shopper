import React, { Component } from 'react';
import './Container.css'
import Product from './Products/Product';
import data from '../data.json'

class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            products:data.products
        }
    }
    render() {
        return (
            <div className="grid-container">
                <div className="header">
                    <a href="/">FLIPKART</a>
                </div>
                <div className="main">
                    <div className="mainContent">
                        <Product products={this.state.products}/>
                    </div>
                    <div className="sideBar">
                        SIDEBAR
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


