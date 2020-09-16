import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const prods=this.props.products;
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div>
                            <a href="#">
                                <img src={require(`./Images/${product.image}`)} alt={product.title}></img>
                                <p>{product.title}</p>
                                <div className="price">
                                    <p>Amount:{product.price}</p>
                                    <button onClick={()=>this.props.addToCart(product)}
                                    >ADD to Cart</button>
                                </div>
                            </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Product;
