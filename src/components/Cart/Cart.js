import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        
        const {cartItems} = this.props;
        return (
            <div>
                You have {cartItems.length} in the cart

                
            </div>
        )
    }
}
