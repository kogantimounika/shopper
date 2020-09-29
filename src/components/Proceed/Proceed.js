import React, { Component } from 'react';
import './Proceed.css';
import Payment from "../Payment/Payment";

export default class Proceed extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            makePayment: false
        }
    }

    render() {
        return (
            <div>
                <div className="myClass">
                    <label> Name:
                    <input type="text" name="name" />
                    </label>
                    <label> Email:
                    <input type="email" name="email" />
                    </label>
                    <label> PhNo:
                    <input type="PhNo" name="PhNo" />
                    </label>
                </div>

                <input type="submit" value="Submit" className="button"
                    onClick={() => this.setState({ makePayment: true })} />
                {this.state.makePayment && <Payment></Payment>}
            </div>
        )
    }
}
