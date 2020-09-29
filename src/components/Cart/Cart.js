import React, { Component } from 'react';
import './Cart.css';
import Proceed from '../Proceed/Proceed';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkOut: false
        }
    }
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                You have {cartItems.length} in the cart
                <ul className="carts">
                    {this.props.cartItems.map((cart) => (
                        <li key={cart.id}>
                            <div className="cart2">
                                <div>
                                    <a href="#">

                                        <img className="cart1"
                                            src={require(`../Products/Images/${cart.image}`)}
                                            alt={cart.title}></img>
                                    </a>
                                </div>

                                <div className="cart3">
                                    <div>{cart.title}</div>
                                    <div>des : {cart.description}</div>
                                    <div>Total price for Items:{cart.price}*{cart.count}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                    <div className="total">
                        TOTAL AMOUNT:{cartItems.reduce((acc, val) => (
                            Math.round(acc + val.price * val.count)
                        ), 0)}
                    </div>
                    <div className="proceed">
                        <button type="button"
                            onClick={() => this.setState({ checkOut: true })}>Proceed</button>
                    </div>
                    {this.state.checkOut &&
                        <Proceed />
                    }
                </ul>
            </div>
        )
    }
}
