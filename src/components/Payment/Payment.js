import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Payment.css';
import history from '../history';



class Payment extends Component {

    constructor(props) {
        super(props); 
            this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `../PayPage/PayPage`;
        history.push(path);
    }

    render() {
        return (
            <div>
                <div className = "Pay">
                    <h4>Payment type : </h4>
                <label> 
                    <input type="radio" name="radio" /> Credit/Debit
                </label>
                <label> 
                    <input type="radio" name="radio" /> COD
                </label>
                </div>
                <div className = "button1">
                <button type = "button" onClick={this.routeChange}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Payment);
