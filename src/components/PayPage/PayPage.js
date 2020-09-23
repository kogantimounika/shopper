import React, { Component } from 'react';
import './PayPage.css';

export default class PayPage extends Component {
    myFunction = () => {
        alert("I am an alert box!");
    }
    render() {
        return (
        <div class="row">
            <div class="col-75">
                <div class="container">
                    <div class="row">
                        <div class="col-50">
                            <h3>Billing Address</h3>
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                            <input type="text1" id="fname" name="firstname" />
                            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                            <input type="text1" id="email" name="email"/>
                            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                            <input type="text1" id="adr" name="address"/>
                            <label for="city"><i class="fa fa-institution"></i> City</label>
                            <input type="text1" id="city" name="city"/>
                            <div class="row">
                                <div class="col-50">
                                    <label for="state">State</label>
                                    <input type="text1" id="state" name="state" />
                                </div>
                                <div class="col-50">
                                    <label for="zip">Zip</label>
                                    <input type="text1" id="zip" name="zip" />
                                </div>
                            </div>
                        </div>
                        <div class="col-50">
                            <h3>Payment</h3>
                            <label for="cname">Name on Card</label>
                            <input type="text1" id="cname" name="cardname" />
                            <label for="ccnum">Credit card number</label>
                            <input type="text1" id="ccnum" name="cardnumber"  />
                            <label for="expmonth">Exp Month</label>
                            <input type="text1" id="expmonth" name="expmonth" />
                            <div class="row">
                                <div class="col-50">
                                    <label for="expyear">Exp Year</label>
                                    <input type="text1" id="expyear" name="expyear" />
                                </div>
                                <div class="col-50">
                                    <label for="cvv">CVV</label>
                                    <input type="text1" id="cvv" name="cvv" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Continue to checkout" class="btn" onClick = "myFunction()"/>
                </div>
            </div>
        </div>

        )
    }
}



