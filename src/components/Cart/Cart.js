import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {
    render() { 
        const {cartItems} = this.props;
        return (
            <div>
                You have {cartItems.length} in the cart
                <ul className="carts">
                    {this.props.cartItems.map((cart)=>(
                        <li key={cart.id}>
                            <div className = "cart2">
                                <div>
                                <a href="#">
                                    
                                    <img className = "cart1"
                                    src={require(`../Products/Images/${cart.image}`)} 
                                    alt={cart.title}></img>
                                    </a>
                                    </div>
                        
                                    <div className = "cart3">
                                        <div>{cart.title}</div>
                                    <div>des : {cart.description}</div>
                                    <div>Total price for Items:{cart.price}*{cart.count}</div>
                                    </div>
                            </div>
                        </li>
                    ))}
                            <div className="total">
                                TOTAL AMOUNT:{cartItems.reduce((acc,val)=>(
                                    acc+val.price*val.count
                                ),0)}

                            </div>
                </ul>
            </div>
        )
    }
}
