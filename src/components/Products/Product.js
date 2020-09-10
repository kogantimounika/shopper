import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const prods=this.props.products;
        console.log(prods)
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div className="image-div">
                            <a href="#">
                                <img src={require(`./Images/${product.image}`)} 
                                     alt={product.title}></img>
                                <p>{product.title}</p>
                            </a>
                            <p>${product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Product;
